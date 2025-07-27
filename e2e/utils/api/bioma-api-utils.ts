import { LeadEmailResponse } from "../../../types/types";

export async function getLeads(request: any, leadCode: string): Promise<LeadEmailResponse> {
    const leadResponse = await request.get(`https://api.bioma.health/api/leads/${leadCode}?api_token=6280e81f-fe64-441c-ab90-c3234a6b085f`);
    if (!leadResponse.ok()) {
      throw new Error(`GET /leads/${leadCode} failed with status ${leadResponse.status()}: ${await leadResponse.text()}`);
    }
    const leadResponseData = (await leadResponse.json()) as LeadEmailResponse;
    return leadResponseData;
  }