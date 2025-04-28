// import { AnalysisResult } from '../types';

// // Mock analysis service to simulate backend predictions
// export const analyzeMockData = (text: string, imageUrl: string | null): Promise<AnalysisResult> => {
//   return new Promise((resolve) => {
//     // Simulate API delay
//     setTimeout(() => {
//       // Generate random score between 0 and 1
//       const score = Math.random();
      
//       // Determine label based on score
//       let label: 'No Depression' | 'Mild' | 'Moderate' | 'Severe';
//       if (score < 0.3) {
//         label = 'No Depression';
//       } else if (score < 0.5) {
//         label = 'Mild';
//       } else if (score < 0.7) {
//         label = 'Moderate';
//       } else {
//         label = 'Severe';
//       }
      
//       // Generate mock text features
//       const textFeatures = [
//         { name: 'Negative sentiment', value: Math.random() * 0.8 + 0.2 * (score > 0.5 ? 1 : 0) },
//         { name: 'Self-reference', value: Math.random() * 0.7 + 0.3 * (score > 0.4 ? 1 : 0) },
//         { name: 'Social isolation', value: Math.random() * 0.6 + 0.4 * (score > 0.6 ? 1 : 0) },
//         { name: 'Emotional language', value: Math.random() * 0.9 },
//         { name: 'Sleep references', value: Math.random() * 0.5 + 0.3 * (score > 0.5 ? 1 : 0) }
//       ];
      
//       // Generate mock image features
//       const imageFeatures = [
//         { name: 'Facial expression', value: Math.random() * 0.8 + 0.2 * (score > 0.5 ? 1 : 0) },
//         { name: 'Color tones', value: Math.random() * 0.7 + 0.3 * (score > 0.6 ? 1 : 0) },
//         { name: 'Lighting', value: Math.random() * 0.6 + 0.2 * (score > 0.4 ? 1 : 0) },
//         { name: 'Image composition', value: Math.random() * 0.5 },
//         { name: 'Visual energy', value: Math.random() * 0.7 }
//       ];
      
//       // Calculate confidence
//       const confidence = 0.7 + Math.random() * 0.25;
      
//       resolve({
//         score,
//         label,
//         textFeatures,
//         imageFeatures,
//         confidence
//       });
//     }, 1500); // 1.5 second delay to simulate processing
//   });
// };