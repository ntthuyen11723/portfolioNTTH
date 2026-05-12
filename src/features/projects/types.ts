/* ================= BASE TYPES ================= */

export type Metric = {
  label: string;
  value: number;
};

export type ArtifactItem = {
  title: string;
  description?: string;
  externalLink?: string;
  images?: string[];
  files?: string[];
};

/* ================= MAIN PROJECT ================= */

export type Project = {
  slug: string;

  /* ===== BASIC INFO ===== */
  title_card: string;
  title: string;

  type: string;
  domain?: string;
  method?: string;
  duration?: string;
  teamSize?: number;

  shortDescription: string;
  longDescription?: string;
  heroImage?: string;

  tags: string[];
  tools: string[];

  /* ===== METRICS (FOR HOME + CARD) ===== */
  metrics: {
    bpmn?: number;
    usecases?: number;
    screens?: number;
    actors?: number;
    testCases?: number;
  };

  /* ===== BUSINESS CONTEXT ===== */
  context: {
    client?: string;
    background: string;
    problem: string[];
    problemdtl:string[];   
    objectives: string[];
  };

  /* ===== YOUR ROLE ===== */
  role: {
    responsibilities: string[];
    stakeholders: string[];
  };

  /* ===== THINKING PROCESS ===== */
  // process: {
  //   steps: {
  //     name: string;
  //     description: string;

  //     // 🔥 VERY IMPORTANT (BA thinking)
  //     output?: string[]; // bạn tạo ra gì ở step này
  //     artifacts?: string[]; // link tới artifact type (bpmn/ui/docs)
  //   }[];
  // };

  /* ===== ARTIFACTS (PROOF) ===== */
  artifacts: {
    bpmn?: ArtifactItem;
    usecases?: ArtifactItem;
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