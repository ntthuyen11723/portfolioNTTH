import { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    slug: "digital-transformation-public",

    /* ===== BASIC ===== */
    title: "Digital Transformation Project",
    type: "Public Sector System",
    domain: "Government",
    duration: "2025",
    teamSize: 8,

    shortDescription:
      "Chuyển đổi số hệ thống an sinh xã hội cho Mặt trận Tổ quốc TP.HCM.",

    heroImage: "/images/digital/asxh.png",

    tags: ["SRS", "BPMN", "Use Case", "UX/UI"],
    tools: ["Figma", "Draw.io", "Microsoft Word"],

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
        "Hệ thống vận hành thủ công, thiếu đồng bộ giữa các cấp hành chính.",

      problem: [
        "Quy trình xử lý hồ sơ thủ công",
        "Thiếu hệ thống tập trung",
        "UX kém, khó sử dụng",
      ],

      objectives: [
        "Số hóa quy trình nghiệp vụ",
        "Xây dựng mobile + web portal",
        "Tối ưu UX",
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
        "Business",
        "Developers",
        "QA",
      ],
    },

    /* ===== PROCESS ===== */
    process: {
      steps: [
        {
          name: "Requirement Elicitation",
          description:
            "Thu thập yêu cầu từ stakeholders.",
          output: ["Requirement List"],
        },
        {
          name: "AS-IS Analysis",
          description:
            "Phân tích quy trình hiện tại.",
          output: ["AS-IS BPMN"],
          artifacts: ["bpmn"],
        },
        {
          name: "TO-BE Design",
          description:
            "Thiết kế quy trình mới.",
          output: ["TO-BE BPMN", "Use Case"],
          artifacts: ["bpmn"],
        },
        {
          name: "UX/UI Design",
          description:
            "Thiết kế mockups.",
          output: ["Figma Screens"],
          artifacts: ["ui"],
        },
        {
          name: "Documentation",
          description:
            "Viết SRS.",
          output: ["SRS"],
          artifacts: ["documents"],
        },
      ],
    },

    /* ===== ARTIFACTS ===== */
    artifacts: {
      bpmn: {
        title: "Business Process Modeling",
        images: [
          "/images/digital/bpmn-1.png",
          "/images/digital/bpmn-2.png",
        ],
        description: "AS-IS & TO-BE flows",
      },

      ui: {
        title: "UI Mockups",
        images: [
          "/images/digital/ui-1.png",
          "/images/digital/ui-2.png",
        ],
      },

      documents: {
        title: "SRS Documents",
        files: ["/docs/srs.pdf"],
      },
    },

    /* ===== OUTCOME ===== */
    outcome: {
      impact: [
        "Giảm ambiguity giữa BA và dev",
        "Tăng tốc độ triển khai",
        "Cải thiện UX",
      ],

      businessValue: [
        "Chuẩn hóa quy trình",
        "Giảm phụ thuộc manual",
      ],

      highlights: [
        { label: "BPMN Flows", value: 3 },
        { label: "Screens", value: 45 },
      ],
    },
  },
  {
  slug: "smart-check",

  /* ===== BASIC ===== */
  title: "Smart Check & Track",
  type: "Device Management System",
  domain: "Enterprise / IoT",
  duration: "2025",
  teamSize: 6,

  shortDescription:
    "Hệ thống quản lý thiết bị thông minh giúp theo dõi trạng thái, lịch sử vận hành và tối ưu quy trình bảo trì.",

  heroImage: "/images/sct/hero.png",

  tags: ["SRS", "BPMN", "ERD", "UAT"],
  tools: ["Figma", "Draw.io", "MySQL"],

  /* ===== METRICS ===== */
  metrics: {
    bpmn: 11,
    screens: 35,
    actors: 6,
    testCases: 60,
  },

  /* ===== CONTEXT ===== */
  context: {
    client: "Internal Enterprise System",

    background:
      "Hệ thống hiện tại thiếu khả năng theo dõi trạng thái thiết bị theo thời gian thực và quản lý lịch sử vận hành.",

    problem: [
      "Không có hệ thống centralized để quản lý thiết bị",
      "Khó theo dõi trạng thái và lịch sử thiết bị",
      "Quy trình bảo trì thiếu chuẩn hóa",
    ],

    objectives: [
      "Xây dựng hệ thống quản lý thiết bị tập trung",
      "Theo dõi trạng thái thiết bị real-time",
      "Chuẩn hóa quy trình bảo trì và vận hành",
    ],
  },

  /* ===== ROLE ===== */
  role: {
    responsibilities: [
      "Phân tích hệ thống hiện tại",
      "Thiết kế BPMN flows",
      "Xây dựng ERD",
      "Viết SRS",
      "Hỗ trợ UAT",
    ],

    stakeholders: [
      "Product Owner",
      "Developers",
      "QA Team",
    ],
  },

  /* ===== PROCESS ===== */
  process: {
    steps: [
      {
        name: "System Analysis",
        description: "Phân tích hệ thống hiện tại và xác định gap.",
        output: ["System Gap Analysis"],
      },
      {
        name: "Process Modeling",
        description: "Thiết kế các luồng nghiệp vụ chính.",
        output: ["BPMN Flows"],
        artifacts: ["bpmn"],
      },
      {
        name: "Data Modeling",
        description: "Thiết kế cấu trúc dữ liệu hệ thống.",
        output: ["ERD"],
        artifacts: ["dataModel"],
      },
      {
        name: "UI Design",
        description: "Thiết kế UI quản lý thiết bị.",
        output: ["UI Screens"],
        artifacts: ["ui"],
      },
      {
        name: "Documentation & UAT",
        description: "Viết SRS và hỗ trợ test.",
        output: ["SRS", "Test Cases"],
        artifacts: ["documents"],
      },
    ],
  },

  /* ===== ARTIFACTS ===== */
  artifacts: {
    bpmn: {
      title: "Device Management Flows",
      images: ["/images/sct/bpmn-1.png"],
      description: "Các luồng quản lý thiết bị và bảo trì",
    },

    ui: {
      title: "Management UI",
      images: ["/images/sct/ui-1.png"],
    },

    dataModel: {
      title: "Database Design (ERD)",
      images: ["/images/sct/erd.png"],
    },

    documents: {
      title: "SRS & Test Docs",
      files: ["/docs/sct-srs.pdf"],
    },
  },

  /* ===== OUTCOME ===== */
  outcome: {
    impact: [
      "Chuẩn hóa quy trình quản lý thiết bị",
      "Giảm sai sót trong vận hành",
      "Tăng khả năng theo dõi real-time",
    ],

    businessValue: [
      "Tăng hiệu suất vận hành",
      "Giảm downtime thiết bị",
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
  type: "Vehicle Service Platform",
  domain: "Service Platform",
  duration: "2025",
  teamSize: 5,

  shortDescription:
    "Nền tảng kết nối người dùng với dịch vụ sửa chữa, cứu hộ và bảo trì xe hoạt động 24/7.",

  heroImage: "/images/247/hero.png",

  tags: ["Stakeholder Gathering", "BPMN", "UX/UI"],
  tools: ["Figma", "Power BI"],

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
      "Người dùng gặp khó khăn trong việc tìm kiếm dịch vụ sửa chữa và cứu hộ xe nhanh chóng.",

    problem: [
      "Thiếu nền tảng kết nối dịch vụ",
      "Khó tìm dịch vụ đáng tin cậy",
      "Quy trình đặt dịch vụ chưa tối ưu",
    ],

    objectives: [
      "Xây dựng platform kết nối dịch vụ",
      "Tối ưu trải nghiệm đặt dịch vụ",
      "Quản lý backend vận hành",
    ],
  },

  /* ===== ROLE ===== */
  role: {
    responsibilities: [
      "Thu thập yêu cầu stakeholders",
      "Thiết kế BPMN",
      "Xây dựng Use Case",
      "Thiết kế UI backend",
    ],

    stakeholders: [
      "Business Owner",
      "Developers",
    ],
  },

  /* ===== PROCESS ===== */
  process: {
    steps: [
      {
        name: "Stakeholder Interview",
        description: "Thu thập yêu cầu từ stakeholders.",
        output: ["Requirement Notes"],
      },
      {
        name: "Process Modeling",
        description: "Thiết kế luồng nghiệp vụ dịch vụ.",
        output: ["BPMN Flows"],
        artifacts: ["bpmn"],
      },
      {
        name: "Use Case Design",
        description: "Xây dựng use case cho hệ thống.",
        output: ["Use Cases"],
      },
      {
        name: "UI Design",
        description: "Thiết kế backend UI.",
        output: ["Admin Screens"],
        artifacts: ["ui"],
      },
    ],
  },

  /* ===== ARTIFACTS ===== */
  artifacts: {
    bpmn: {
      title: "Service Flow",
      images: ["/images/247/bpmn-1.png"],
    },

    ui: {
      title: "Backend UI",
      images: ["/images/247/ui-1.png"],
    },
  },

  /* ===== OUTCOME ===== */
  outcome: {
    impact: [
      "Đảm bảo dev hiểu đúng logic nghiệp vụ",
      "Giảm misunderstanding trong team",
      "Tăng tốc độ triển khai",
    ],

    businessValue: [
      "Tối ưu quy trình đặt dịch vụ",
      "Tăng trải nghiệm người dùng",
    ],

    highlights: [
      { label: "BPMN Flows", value: 12 },
      { label: "Screens", value: 61 },
    ],
  },
}


];