"use server";

import {
  projectQualifier,
  type ProjectQualifierInput,
  type ProjectQualifierOutput,
} from "@/ai/flows/project-qualifier-ai";

export async function getAiResponse(
  input: ProjectQualifierInput
): Promise<ProjectQualifierOutput | { error: string }> {
  try {
    const output = await projectQualifier(input);

    if (!output) {
      throw new Error("AI response is empty.");
    }
    
    return output;
  } catch (e: unknown) {
    const errorMessage = e instanceof Error ? e.message : String(e);
    console.error("Error in getAiResponse:", errorMessage);
    return { error: "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde." };
  }
}
