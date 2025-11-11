
const Info = {
    name: "Nguyen Anh Quoc",
    stack:["Software Engineer","Devops Engineer","Freelancer"],
    bio:"I am currently a final-year student at Ho Chi Minh City College of Industry and Trade, majoring in Information Technology. I am actively seeking opportunities as a DevOps Engineer or Software Engineer Intern. I am committed to continuous learning, and eager to apply my knowledge and skills to real-world projects in a professional environment."
}

const ProjectInfo = [
  {
    title: "E-Commerce App",
    desc: "Ứng dụng bán hàng trực tuyến được xây dựng với React, Node.js, Express và MongoDB, cung cấp trải nghiệm mua sắm mượt mà cho người dùng. Các tính năng bao gồm đăng ký/đăng nhập, quản lý giỏ hàng, thanh toán QR code, quản lý đơn hàng và sản phẩm cho cả người dùng và admin. Hệ thống bảo mật bằng JWT, giao diện hiện đại với TailwindCSS, tối ưu trên cả desktop và mobile, là dự án thực tế giúp học cách tích hợp frontend-backend và triển khai ứng dụng web đầy đủ chức năng.",
    image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
    live: "https://ecommerce-demo.vercel.app",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "TailwindCSS"],
    link: "https://ecommerce-demo.vercel.app",
    github: "https://github.com/yourusername/ecommerce-app"
  },
  {
    title: "Real Estate Price Prediction",
    desc: "Dự án machine learning nhằm dự đoán giá bất động sản, sử dụng Scikit-learn và FastAPI để xây dựng model và API phục vụ dự đoán. MLOps pipeline được áp dụng để tự động hóa quá trình huấn luyện, kiểm thử và triển khai mô hình, đảm bảo hiệu quả và khả năng mở rộng. Hệ thống được container hóa bằng Docker và theo dõi experiment bằng MLflow, giúp quản lý mô hình và dữ liệu một cách chuyên nghiệp.",
    image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
    live: "https://realestate-mlops.vercel.app",
    technologies: ["Python", "Scikit-learn", "FastAPI", "Docker", "MLflow"],
    link: "https://realestate-mlops.vercel.app",
    github: "https://github.com/yourusername/real-estate-mlops"
  },
  {
    title: "Portfolio Website",
    desc: "Website cá nhân giới thiệu bản thân, kỹ năng và dự án, được xây dựng bằng React, TypeScript và Vite. Giao diện sử dụng Mantine UI kết hợp Framer Motion để tạo các animation hiện đại và hiệu ứng Vanta đẹp mắt. Website giúp thể hiện kỹ năng frontend, tối ưu trải nghiệm người dùng và hiển thị các dự án, thông tin cá nhân một cách trực quan, chuyên nghiệp.",
    image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
    live: "https://yourname.vercel.app",
    technologies: ["React", "TypeScript", "Vite", "Mantine UI", "Framer Motion"],
    link: "https://yourname.vercel.app",
    github: "https://github.com/yourusername/portfolio"
  },
  {
    title: "Sales Management System",
    desc: "Hệ thống quản lý bán hàng full-stack với Java và Spring Boot cho backend, MySQL làm cơ sở dữ liệu và React + Redux cho frontend. Bao gồm các chức năng CRUD sản phẩm, đơn hàng, người dùng và thống kê doanh thu, hỗ trợ quản lý bán hàng hiệu quả. Giao diện thân thiện, dễ sử dụng và tích hợp dashboard thống kê trực quan, giúp doanh nghiệp theo dõi hoạt động kinh doanh và ra quyết định nhanh chóng.",
    image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
    live: "https://sales-admin.vercel.app",
    technologies: ["Java", "Spring Boot", "MySQL", "React", "Redux"],
    link: "https://sales-admin.vercel.app",
    github: "https://github.com/yourusername/sales-management"
  },
  {
    title: "Brand Sentiment Analysis",
    desc: "Hệ thống phân tích cảm xúc người dùng trên mạng xã hội giúp doanh nghiệp theo dõi hình ảnh thương hiệu theo thời gian. Sử dụng Python và Transformers để xử lý ngôn ngữ tự nhiên, Flask để xây dựng API, cùng PostgreSQL và Docker để lưu trữ và triển khai dịch vụ. Hệ thống cho phép phân tích dữ liệu lớn, đánh giá sentiment và đưa ra báo cáo chi tiết, hỗ trợ các quyết định marketing chính xác hơn.",
    image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
    live: "https://brand-sentiment-ai.vercel.app",
    technologies: ["Python", "Transformers", "Flask", "PostgreSQL", "Docker"],
    link: "https://brand-sentiment-ai.vercel.app",
    github: "https://github.com/yourusername/brand-sentiment-analysis"
  },
  {
    title: "DevOps CI/CD Pipeline",
    desc: "Dự án thiết lập pipeline tự động hóa build, test và deploy ứng dụng full-stack bằng Jenkins, SonarQube và Docker. Hệ thống bao gồm các stages kiểm thử, kiểm tra chất lượng code và deploy lên server staging/production, đảm bảo tính ổn định và nhanh chóng. Sử dụng GitHub Actions và Nginx để quản lý code và deploy, giúp tăng hiệu quả team DevOps, rút ngắn thời gian triển khai và giảm thiểu lỗi phát sinh.",
    image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
    live: "https://devops-pipeline-demo.vercel.app",
    technologies: ["Jenkins", "SonarQube", "Docker", "Nginx", "GitHub Actions"],
    link: "https://devops-pipeline-demo.vercel.app",
    github: "https://github.com/yourusername/devops-pipeline"
  }
]


const SkillInfo = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "TailwindCSS", "Framer Motion"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Java", "Spring Boot", "MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    title: "DevOps",
    skills: ["Docker", "Jenkins", "Git & GitHub", "Nginx"]
  },
  {
    title: "Language",
    skills: ["Python", "Java", "JavaScript", "Golang"]
  }
]


const ExperienceInfo = [
  {
    title: "Software Engineer Intern",
    company: "ABC Tech",
    period: "Jun 2024 - Aug 2024",
    desc: "Tham gia phát triển và bảo trì các ứng dụng web full-stack với React và Node.js. Hỗ trợ tối ưu hiệu năng và viết unit test cho các module backend. Làm việc theo Agile Scrum, tham gia code review và triển khai CI/CD với Jenkins.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Jenkins"],
    link: "https://www.abctech.com"
  },
  {
    title: "DevOps Intern",
    company: "XYZ Solutions",
    period: "Sep 2024 - Dec 2024",
    desc: "Thiết lập pipeline CI/CD cho dự án web full-stack, quản lý container Docker và triển khai server Nginx. Giám sát log và performance, tham gia tự động hóa các công việc triển khai và test. Làm quen với các công cụ MLOps và quản lý dự án Agile.",
    technologies: ["Docker", "Jenkins", "Nginx", "GitHub Actions", "Python"],
    link: "https://www.xyzsolutions.com"
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "Jan 2023 - Present",
    desc: "Thực hiện các dự án cá nhân và freelance cho khách hàng nhỏ, bao gồm website bán hàng, landing page, portfolio. Sử dụng React, TailwindCSS, Node.js để xây dựng front-end và back-end. Triển khai ứng dụng lên Vercel hoặc AWS, quản lý cơ sở dữ liệu MongoDB/MySQL.",
    technologies: ["React", "TailwindCSS", "Node.js", "MongoDB", "MySQL"],
    link: "#"
  }
];

export { Info, ProjectInfo, SkillInfo, ExperienceInfo };

