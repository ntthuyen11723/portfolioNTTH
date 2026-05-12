// // src/features/projects/types.ts

// export interface Project {
//   slug: string;
//   title: string;
//   type: string;
//   description: string;

//   metrics: {
//     bpmn: number;
//     screens: number;
//     actors?: number;
//     testCases?: number;
//   };

//   tags: string[];

//   sections: {
//     overview: string;
//     artifacts: string;
//     mockups: string;
//     outcome: string;
//   };

//   // Optional (để scale sau này)
//   images?: {
//     bpmn?: string[];
//     ui?: string[];
//     flow?: string;
//   };

//   tools?: string[];
// }
// src/features/projects/types.ts

/* ================= BASE TYPES ================= */

export type Metric = {
  label: string;
  value: number;
};

export type ArtifactItem = {
  title: string;
  description?: string;
  images?: string[];
  files?: string[];
};

/* ================= MAIN PROJECT ================= */

export type Project = {
  slug: string;

  /* ===== BASIC INFO ===== */
  title: string;
  type: string;
  domain?: string;
  duration?: string;
  teamSize?: number;

  shortDescription: string;
  heroImage?: string;

  tags: string[];
  tools: string[];

  /* ===== METRICS (FOR HOME + CARD) ===== */
  metrics: {
    bpmn?: number;
    screens?: number;
    actors?: number;
    testCases?: number;
  };

  /* ===== BUSINESS CONTEXT ===== */
  context: {
    client?: string;
    background: string;
    problem: string[];
    objectives: string[];
  };

  /* ===== YOUR ROLE ===== */
  role: {
    responsibilities: string[];
    stakeholders: string[];
  };

  /* ===== THINKING PROCESS ===== */
  process: {
    steps: {
      name: string;
      description: string;

      // 🔥 VERY IMPORTANT (BA thinking)
      output?: string[]; // bạn tạo ra gì ở step này
      artifacts?: string[]; // link tới artifact type (bpmn/ui/docs)
    }[];
  };

  /* ===== ARTIFACTS (PROOF) ===== */
  artifacts: {
    bpmn?: ArtifactItem;
    ui?: ArtifactItem;
    documents?: ArtifactItem;
    dataModel?: ArtifactItem;
    flow?: ArtifactItem;
  };

  /* ===== OUTCOME ===== */
  outcome: {
    impact: string[];
    businessValue?: string[];

    // optional for detail page only
    highlights?: Metric[];
  };
};