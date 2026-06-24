import { Project } from "./types";

export const PROJECTS: Project[] = [

  {
    slug: "smart-check-track",

    /* ===== BASIC ===== */
    title: "Smart Check & Track",
    title_card: "Smart Check & Track",
    type: "Device Management System",
    domain: "Enterprise / Supply Chain/ Inventory Management",
    method: "Waterfall",
    duration: "May 2025 - April 2025",
    teamSize: 6,

    shortDescription:
      "End-to-end hardware lifecycle management using QR and RFID for tracking and warranty processes",
    // longDescription:
    //   "Smart Check & Track is an internal system designed to manage the full product lifecycle, encompassing contracts, inventory movements (Inbound/Outbound), delivery, and warranty management",

    heroImage: "/images/digital/sct.png",

    tags: ["SRS", "BPMN", "ERD", "UAT"],
    tools: ["Figma", "Draw.io", "MySQL","GenAI (Gemini, Claude),..."],

    /* ===== METRICS ===== */
    metrics: {
      bpmn: 11,
      screens: 35,
      testCases: 60,
    },

    /* ===== CONTEXT ===== */
    context: {
      client: "HPT Vietnam Corporation",

      background:
        "Smart Check & Track provides a holistic approach to product lifecycle management, integrating modules for contracts, inventory, and warranty services to align business processes with practical operational requirements.",

      problem: [
        "Fragmented Post-Sale Tracking",
        "Manual Data Reconciliation Errors",
      ],

      problemdtl: ["Significant discrepancies between system logic and actual operational workflows",
        "High reliance on manual data entry, leading to frequent human error",
        "Data Silos: Fragmented information across departments, hindering real-time tracking",
        "ragmented login systems and complex navigation affecting user adoption",
      ],
      objectives: [
        "Standardize business workflows and eliminate data discrepancies",
        "Automate inventory tasks using QR/RFID technology",
        "Enable real-time product tracking and reporting",
        "Consolidate data silos and enhance SSO security",
      ],
    },

    /* ===== ROLE ===== */
    role: {
      responsibilities: [
        "Analyze business requirements",
        "Model business workflows (BPMN)",
        "Design UX/UI mockups",
        "Develop SRS documentation",
        "Define Use Cases",
        "Compose User Guides",
        "Support UAT ",
      ],

      stakeholders: [
        "Product Owner",
        "Developers",
        "QA Team",
      ],
    },

    /* ===== ARTIFACTS ===== */
    artifacts: {
      dataModel: {
        title: "Use Cases",
        images: ["/usecasesctstaff.png"],
        // description: "AS-IS & TO-BE flows",
      },


      ui: {
        title: "Management UI",
        externalLink: "https://www.figma.com/design/83c6EhKLQHLGXYgXC0f3KU/Untitled?node-id=2001-10028&t=z9bQe3NnlQGQVt7d-1",

      },
    },

    /* ===== OUTCOME ===== */
    outcome: {
      impact: [
        "Authored end-to-end SRS, BRD, and User Guides covering 6 user roles, 11 BPMN workflows, and 60+ test cases",
        "Designed 35 UI/UX screens in Figma adopted as the dev team's implementation reference",
        "Trained 20 end-users post-launch with zero usability-related support tickets — only infrastructure issues reported",
        "Delivered 3 iterative system versions, refining business workflows based on each round of stakeholder feedback",
      ],

      highlights: [
        { label: "BPMN Flows", value: 11 },
        { label: "Screens", value: 35 },
        { label: "Test Cases", value: 60 },
      ],
    },
  },
  {
    slug: "vehicle-svc",

    /* ===== BASIC ===== */
    title: "24/7 Vehicle Service Platform",
    title_card: "24/7 Vehicle Service Platform",
    type: "Vehicle Service Platform",
    domain: "Service Platform",
    duration: "July 2025 - December 2025",
    method: "Agile",
    teamSize: 5,

    shortDescription:
      "A platform connecting rentals and chauffeurs while standardizing transport provider operations",
    // longDescription:
    //   "Dự án xây dựng nền tảng kết nối dịch vụ sửa chữa, cứu hộ và bảo trì xe hoạt động 24/7, bao gồm thiết kế BPMN, UI/UX và hỗ trợ triển khai để tối ưu trải nghiệm người dùng và quy trình vận hành.",

    heroImage: "/DVX247.png",

    tags: ["Use Cases", "BRD", "BPMN", "UX/UI"],
    tools: ["Figma", "Power BI","GenAI (Gemini, Claude),..."],

    /* ===== METRICS ===== */
    metrics: {
      bpmn: 12,
      screens: 61,
      actors: 3,
    },

    /* ===== CONTEXT ===== */
    context: {
      client: "Service Platform Startup",

      background:
        "The DVX247 project digitizes traditional vehicle rentals into a multi-party ecosystem. By focusing on centralized data management, the system maximizes operational efficiency, ensures transparency, and creates sustainable value for all stakeholders, including renters, agencies, drivers, and owners",

      problem: [
        "Inadequate Fleet & Driver Monitoring",
        "Unstandardized Service Quality"

      ],
      problemdtl: [
        "Manual management via calls and spreadsheets causes operational delays",
        "Fragmented communication between stakeholders increases response times and errors",
        "Lack of real-time monitoring for vehicle usage and driver availability",
        "Manual commission calculations need improved financial transparency and accuracy",
      ],
      objectives: [
        "Optimize and digitize multi-party vehicle rental service management",
        "Centralize management of vehicles, drivers, trips, and renters",
        "Automate operations and ensure transparent trip reconciliation",
        "Optimize operational performance and total system revenue",
      ],
    },

    /* ===== ROLE ===== */
    role: {
      responsibilities: [
        "Collect stakeholder requirements",
        "Design BPMN",
        "Develop Use Cases",
        "Design backend UI",
      ],

      stakeholders: [
        "Business Owner",
        "Developers",
      ],
    },



    /* ===== ARTIFACTS ===== */
    artifacts: {
      usecases: {
        title: "Interaction between actors and the system under construction",
        images: ["/bpmndvx247-1.png"],
      },

      ui: {
        title: "Management UI",
        externalLink: "https://www.figma.com/design/r2ZVwerEm3rIUbdSz6jFQK/DVX247-UX-UI?node-id=3002-19615&t=lT2SbyuGM0fVVQab-1",
      },
    },

    /* ===== OUTCOME ===== */
    outcome: {
      impact: [
        "Authored Use Cases for 3 roles and 12 BPMN workflows clarifying multi-party service flows",
        "Designed 61 backend UI/UX screens in Figma adopted as the dev team's implementation reference",
        "Pre go-live: collaborated with development team to ensure accurate requirement translation",
      ],
      highlights: [
        { label: "BPMN Flows", value: 3 },
        { label: "Screens", value: 61 },
      ],
    },
  },
  {
    slug: "digital-transformation-public",

    /* ===== BASIC ===== */
    title: "Digital Transformation Project",
    title_card: "Digital Transformation",
    type: "Public Sector System",
    domain: "Government",
    duration: "November 2025 - April 2026",
    method: "Agile",
    teamSize: 8,

    shortDescription:
      "Digital Social Welfare System for the Vietnam Fatherland Front - Ho Chi Minh City",
    // longDescription:
    //   "Dự án chuyển đổi số hệ thống an sinh xã hội nhằm số hóa quy trình nghiệp vụ, xây dựng portal và mobile app cho Mặt trận Tổ quốc TP.HCM.",

    heroImage: "/images/digital/asxh.png",

    tags: ["SRS", "BPMN", "Use Case", "UX/UI"],
    tools: ["Figma", "Draw.io", "Microsoft Word", "GenAI (Gemini),..."],

    /* ===== METRICS ===== */
    metrics: {
      bpmn: 3,
      screens: 45,
      actors: 6,
    },

    /* ===== CONTEXT ===== */
    context: {
      client: "Vietnam Fatherland Front - HCMC",

      background:
        "Participated in the Digital Transformation of the Social Security System for the Vietnam Fatherland Front Committee of Ho Chi Minh City. Developed a web portal and mobile application to facilitate online application submissions, real-time status tracking, integrated account management, and community engagement. The project aimed to digitize business workflows and eliminate manual administrative overhead",

      problem: [
        "Manual Paperwork Processing",
        "Decentralized Data Management"
      ],
      problemdtl: ["Social security application intake and processing were heavily reliant on manual paperwork",
        "Citizens lacked digital platforms to submit support requests and monitor processing progress",
        "Existing interfaces were outdated, non-interactive, and difficult for users to navigate",
        "Absence of features for public feedback, comments, and interactive communication",

      ],

      objectives: [
        "Transform manual social security processes into a streamlined digital system",
        "Build synchronized multi-platform systems: Web Portal and Social Security-Mobile App",
        "Improve transparency in fund and resource management",
      ],
    },

    /* ===== ROLE ===== */
    role: {
      responsibilities: [
        "Requirement gathering",
        "BPMN modeling",
        "UX/UI design",
        "SRS documentation",
        "Support UAT",
      ],
      stakeholders: [
        "Business Owner",
        "Developers",
      ],
    },

    /* ===== ARTIFACTS ===== */
    artifacts: {
      bpmn: {
        title: "Business Process Modeling",
        images: [
          "/asxh-bpmn-1.png",
          "/asxh-bpmn-2.png",
        ],
        // description: "AS-IS & TO-BE flows",
      },

      ui: {
        title: "Management UI",
        externalLink: "https://www.figma.com/design/puJuZRP1YSBM2Fy2AmGOwf/MTTQ-TP.HCM?node-id=0-1&p=f&t=IlA5Kefzd7T9voX7-0",
      },



    },

    /* ===== OUTCOME ===== */
    outcome: {
      impact: [
        "Authored full SRS and Use Case documentation for the digital social welfare portal, covering 6 actor roles across 3 BPMN workflows",
        "Designed 45 UI/UX screens for synchronized web portal and mobile app supporting online submission and real-time status tracking",
        "Modeled AS-IS and TO-BE business processes to replace manual paperwork workflows previously handled offline",
        "Participated in UAT cycles with stakeholder validation prior to deployment",
      ],

      highlights: [
        { label: "BPMN Flows", value: 3 },
        { label: "Screens", value: 45 },
      ],
    },
  }
];

