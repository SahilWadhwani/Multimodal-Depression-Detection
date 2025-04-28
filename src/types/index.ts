export interface AnalysisResult {
  score: number;
  status: string;
  textFeatures: { name: string; value: number }[];
  imageFeatures: { name: string; value: number }[];
  confidence: number;
}

export interface SampleData {
  id: string;
  title: string;
  imageUrl: string;
  text: string;
  result?: AnalysisResult;
}