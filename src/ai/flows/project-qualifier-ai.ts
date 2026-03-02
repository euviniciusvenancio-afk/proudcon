'use server';
/**
 * @fileOverview A Genkit flow for qualifying potential engineering projects.
 *
 * - projectQualifier - A function that handles the project qualification process.
 * - ProjectQualifierInput - The input type for the projectQualifier function.
 * - ProjectQualifierOutput - The return type for the projectQualifier function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema for the project qualifier flow
const ProjectQualifierInputSchema = z.object({
  conversationHistory: z.array(
    z.object({
      role: z.enum(['user', 'model']),
      text: z.string(),
    })
  ).optional().describe('The ongoing conversation history between the user and the AI.'),
  currentMessage: z.string().describe('The user\'s latest message in the qualification process.'),
});
export type ProjectQualifierInput = z.infer<typeof ProjectQualifierInputSchema>;

// Define the schema for the detailed project information once qualified
const QualifiedProjectDetailsSchema = z.object({
  projectType: z.string().optional().describe('General type of the engineering project (e.g., "Reforma", "Construção", "Consultoria").'),
  scopeSummary: z.string().optional().describe('A summary of the project scope and client needs.'),
  estimatedBudget: z.string().optional().describe('Client\'s estimated budget or budget range (e.g., "Alto", "Médio", "Sem definição").'),
  desiredTimeline: z.string().optional().describe('Client\'s desired timeline for project completion (e.g., "Curto prazo", "Longo prazo").'),
  keyChallenges: z.string().optional().describe('Any specific challenges or concerns mentioned by the client.'),
});

// Define the output schema for the project qualifier flow
const ProjectQualifierOutputSchema = z.object({
  aiResponse: z.string().describe('The AI\'s response, either a question or a final assessment.'),
  isQualificationComplete: z.boolean().describe('Indicates if enough information has been gathered to qualify the project.'),
  qualifiedDetails: QualifiedProjectDetailsSchema.optional().describe('Structured details of the project once qualification is complete.'),
});
export type ProjectQualifierOutput = z.infer<typeof ProjectQualifierOutputSchema>;

export async function projectQualifier(input: ProjectQualifierInput): Promise<ProjectQualifierOutput> {
  return projectQualifierFlow(input);
}

// Define the Genkit prompt for the project qualifier
const projectQualifierPrompt = ai.definePrompt({
  name: 'projectQualifierPrompt',
  input: {schema: ProjectQualifierInputSchema},
  output: {schema: ProjectQualifierOutputSchema},
  prompt: `You are Proudcon Engenharia's AI Project Qualifier. Your role is to professionally and strategically gather essential details from potential clients to assess their engineering project needs.
  Maintain an authoritative, confident, organized, sophisticated, and technically secure tone, avoiding informal or youthful language.
  Your goal is to gather enough information to qualify a lead for a consultation with Jovane Venâncio, our expert engineer.

  Follow these steps:
  1. Review the conversation history.
  2. Process the user's current message.
  3. Determine if enough information has been gathered to make an initial project qualification.
  4. If qualification is NOT complete: Ask ONE clear, strategic question at a time to gather more details about the project type, scope, budget, or timeline.
  5. If qualification IS complete:
     - Summarize the gathered project details in the 'qualifiedDetails' object.
     - Set 'isQualificationComplete' to 'true'.
     - Provide a concluding response in 'aiResponse' that suggests scheduling a direct consultation, reinforcing Proudcon's expertise.

  Here are some initial questions you might ask if the conversation is just starting or if key information is missing:
  - "Para iniciarmos, poderia nos descrever brevemente o tipo de projeto de engenharia que você tem em mente? (e.g., reforma, construção nova, regularização, consultoria)"
  - "Qual seria a natureza ou o objetivo principal deste projeto?"
  - "Existe um prazo estimado ou desejado para a conclusão do projeto?"
  - "Em relação ao orçamento, você já tem uma estimativa ou faixa de investimento em mente para este projeto?"

  Current conversation history:
  {{#each conversationHistory}}
  {{role}}: {{{text}}}
  {{/each}}
  user: {{{currentMessage}}}

  When qualification is complete, populate the 'qualifiedDetails' object comprehensively.`,
});

// Define the Genkit flow for the project qualifier
const projectQualifierFlow = ai.defineFlow(
  {
    name: 'projectQualifierFlow',
    inputSchema: ProjectQualifierInputSchema,
    outputSchema: ProjectQualifierOutputSchema,
  },
  async (input) => {
    // Combine current message with history for the prompt context
    const conversationForPrompt = input.conversationHistory || [];

    // The prompt explicitly includes the current message. We pass the *past* history.
    const {output} = await projectQualifierPrompt({
      conversationHistory: conversationForPrompt,
      currentMessage: input.currentMessage,
    });

    if (!output) {
      throw new Error('Failed to get a response from the AI qualifier prompt.');
    }

    return output;
  }
);
