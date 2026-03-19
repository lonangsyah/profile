/* ============================================
   DATA — Centralized Content Store
   All website content lives here for easy editing.
   Replace placeholder data with your real information.
   ============================================ */

const siteData = {

  // ── Profile ──
  profile: {
    name: "Syahrani Lonang",
    degree: "M.Kom.",
    title: "Dosen & Peneliti di Bidang Artificial Intelligence",
    institution: "Universitas Qamarul Huda Badaruddin Bagu",
    department: "Departemen Teknologi Informasi, Fakultas Sains dan Teknologi",
    keywords: ["Machine Learning","Healthcare Informatics", "Deep Learning", "NLP"],
    bio: [
      "I am a researcher and lecturer in the Department of Information Technology at Universitas Qamarul Huda Badaruddin Bagu, with research interests spanning Machine Learning, Healthcare Informatics, and Deep Learning. My work is driven by a passion for building intelligent, data-driven systems that address real-world challenges particularly in the domain of clinical decision support and disease detection.",
      "Over the years, I have gained extensive experience in teaching and supervising undergraduate students in computer science and informatics, helping shape the next generation of technology professionals. My research contributions have been published in reputable national and international journals, reflecting my commitment to producing impactful and rigorous scholarship.",
      "I have also been recognized through several competitive national research grants, which have supported my work in developing machine learning-based solutions for health informatics. Beyond research, I am deeply passionate about competency-based curriculum development and fostering a collaborative academic learning environment."
    ],
    resumeUrl: "resume.pdf",
    social: {
      googleScholar: "https://scholar.google.com/citations?user=DktCUq4AAAAJ&hl=id",
      linkedin: "https://www.linkedin.com/in/lonangsyah001/",
      scopus: "https://www.scopus.com/authid/detail.uri?authorId=60052893500",
      researchGate: "https://www.researchgate.net/profile/Syahrani-Lonang-2",
      orcid: "https://orcid.org/0009-0007-2510-8148"
    }
  },

  // ── Education ──
  education: [
    {
      degree: "Magister Komputer (M.Kom.)",
      institution: "Universitas Ahmad Dahlan (UAD) - Yogyakarta",
      program: "Concentrations: Machine Learning and Health Informatics",
      year: "2022 – 2024",
      gpa: "IPK: 3.76 / 4.00 - Cum Laude",
    },
    {
      degree: "Sarjana Komputer (S.Kom.)",
      institution: "Universitas Ahmad Dahlan (UAD) - Yogyakarta",
      program: "Concentrations: Artificial Intelligence",
      year: "2017 – 2021",
      gpa: "IPK: 3.71 / 4.00 — Cum Laude",
    }
  ],

  // ── Research Interests ──
  researchInterests: [
    {
      icon: "🧠",
      title: "Machine Learning",
      description: "Developing novel supervised and unsupervised learning algorithms with applications in predictive modeling, classification, and anomaly detection for real-world datasets.",
      keywords: ["Supervised Learning", "Ensemble Methods", "Feature Engineering", "AutoML"]
    },
    {
      icon: "🩺",
      title: "Healthcare Informatics",
      description: "Applying data-driven approaches and intelligent systems to support clinical decision-making, disease detection, and patient outcome prediction using medical and health datasets.",
      keywords: ["Disease Detection", "Clinical Decision Support", "Health Data Mining", "Explainable AI"]
    },
    {
      icon: "🔬",
      title: "Deep Learning",
      description: "Exploring deep neural network architectures including CNNs, RNNs, and Transformers for complex pattern recognition tasks in computer vision and sequential data analysis.",
      keywords: ["Transformers", "Neural Architecture Search", "Transfer Learning", "Model Compression"]
    },
    {
      icon: "💬",
      title: "Natural Language Processing",
      description: "Researching computational methods for understanding and generating human language, with focus on low-resource languages and cross-lingual transfer approaches.",
      keywords: ["Text Classification", "Sentiment Analysis", "Named Entity Recognition", "Machine Translation"]
    }
    
  ],

  // ── Technologies ──
  technologies: {
    "ML/AI Frameworks": [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
      { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
      { name: "spaCy", icon: "https://upload.wikimedia.org/wikipedia/commons/8/88/SpaCy_logo.svg" },
    ],
    "Programming Languages": [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    ],
    "Tools & Platforms": [
      { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "LaTeX", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    ],
    "Cloud & MLOps": [
      { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    ]
  },

  // ── Publications ──
  publications: [
    {
      title: "Enhancing Early Diabetes Detection Using Tree-Based Machine Learning Algorithms with SMOTEENN Balancing",
      venue: "Mobile and Forensics",
      year: 2026,
      authors: "Lonang, S., Putra, A.F.D., Firdaus, A.Z., Syuhada, F., & Sa'adati, Y.",
      doi: "https://journal2.uad.ac.id/index.php/mf/article/view/14495",
      status: "Published",
      topics: ["ML", "DL"],
      bibtex: `@article{lonang2026enhancing,
  title={Enhancing Early Diabetes Detection Using Tree-Based Machine Learning Algorithms with SMOTEENN Balancing},
  author={Lonang, S. and Putra, A.F.D. and Firdaus, A.Z. and Syuhada, F. and Sa'adati, Y.},
  journal={Mobile and Forensics},
  year={2026}
}`
    },
     {
      title: "Hybrid Feature Selection for Effective Heart Disease Detection: A Multi-Algorithm Machine Learning Approach",
      venue: "Scientific Journal of Informatics (SJI)",
      year: 2026,
      authors: "Lonang, S., Putra, A.F.D., Syuhada, F., Firdaus, A.Z., & Masitha, A. ",
      doi: "https://journal2.uad.ac.id/index.php/mf/article/view/14495",
      status: "Published",
      topics: ["ML","Feature Selection", "Healthcare Informatics"],
      bibtex: `@article{lonang2026hybrid,
  title={Hybrid Feature Selection for Effective Heart Disease Detection: A Multi-Algorithm Machine Learning Approach},
  author={Lonang, S., Putra, A.F.D., Syuhada, F., Firdaus, A.Z., & Masitha, A.},
  journal={Scientific Journal of Informatics (SJI)},
  year={2026}
}`
    },
    {
      title: "Improved Malnutrition Classification in Toddlers Using Mutual Information-Guided Feature Selection and Hybrid KNN–MLP Ensemble Learning",
      venue: "Journal of Innovation Information Technology and Application (JINITA)",
      year: 2025,
      authors: "Lonang, S., Yudhana, A., & Saifullah, S.",
      doi: "https://ejournal.pnc.ac.id/index.php/jinita/article/view/2831/1022",
      status: "Published",
      topics: ["ML"],
      bibtex: `@article{lonang2025improved,
  title={Improved Malnutrition Classification in Toddlers Using Mutual Information-Guided Feature Selection and Hybrid KNN–MLP Ensemble Learning},
  author={Lonang, S. and Yudhana, A. and Saifullah, S.},
  journal={Journal of Innovation Information Technology and Application (JINITA)},
  year={2025}
}`
    },
    {
      title: "Text Mining untuk Analisis Kasus Stunting di Nusa Tenggara Barat",
      venue: "Jurnal Ilmiah Edutic: Pendidikan dan Informatika ",
      year: 2025,
      authors: "Syuhada, F., Sa'adati, Y., Apriani, L. A., Lonang, S., & Putra, A. F. D. ",
      doi: "https://journal.trunojoyo.ac.id/edutic/article/viewFile/29522/10861",
      status: "Published",
      topics: ["ML", "NLP","Stunting"],
      bibtex: `@article{syuhada2025text,
  title={Text Mining untuk Analisis Kasus Stunting di Nusa Tenggara Barat},
  author={Syuhada, F. and Sa'adati, Y. and Apriani, L. A. and Lonang, S. and Putra, A. F. D.},
  journal={Jurnal Ilmiah Edutic: Pendidikan dan Informatika},
  year={2025}
}`
    },
    {
      title: "Social, legal, and ethical implications of AI-Generated deepfake pornography on digital platforms: A systematic literature review",
      venue: "Social Sciences & Humanities Open (Elsevier)",
      year: 2025,
      authors: "Ma'arif, A., Maghfiroh, H., Suwarno, I., Prayogi, D., Lonang, S., & Sharkawy, A. N. ",
      doi: "https://www.sciencedirect.com/science/article/pii/S2590291125006102",
      status: "Published",
      topics: ["ML", "Ethics", "AI Safety", "GenAI"],
      bibtex: `@article{maarif2025social,
  title={Social, legal, and ethical implications of AI-Generated deepfake pornography on digital platforms: A systematic literature review},
  author={Ma'arif, A. and Maghfiroh, H. and Suwarno, I. and Prayogi, D. and Lonang, S. and Sharkawy, A. N.},
  journal={Social Sciences & Humanities Open},
  year={2025}
}`
    },
    {
      title: "Performance analysis for classification of malnourished toddlers using k-nearest neighbor.",
      venue: "Scientific Journal of Informatics (SJI)",
      year: 2023,
      authors: "Lonang, S., Yudhana, A., & Biddinika, M. K.",
      doi: "https://www.sciencedirect.com/science/article/pii/S2590291125006102",
      status: "Published",
      topics: ["ML", "Medical Informatics","Malnutrition"],
      bibtex: `@article{lonang2023performance,
  title={Performance analysis for classification of malnourished toddlers using k-nearest neighbor},
  author={Lonang, S. and Yudhana, A. and Biddinika, M. K.},
  journal={Scientific Journal of Informatics (SJI)},
  year={2023}
}`
    },
    {
      title: "Klasifikasi Status Stunting Pada Balita Menggunakan K-Nearest Neighbor Dengan Feature Selection Backward Elimination",
      venue: "Jurnal Media Informatika Budidarma",
      year: 2022,
      authors: "Lonang, S., Normawati, D.",
      doi: "https://www.sciencedirect.com/science/article/pii/S2590291125006102",
      status: "Published",
      topics: ["ML", "Medical Informatics","Malnutrition"],
      bibtex: `@article{lonang2022klasifikasi,
  title={Klasifikasi Status Stunting Pada Balita Menggunakan K-Nearest Neighbor Dengan Feature Selection Backward Elimination},
  author={Lonang, S. and Normawati, D.},
  journal={Jurnal Media Informatika Budidarma},
  year={2022}
}`
    },
    {
      title: "xxxxxxxxx",
      venue: "-",
      year: 2022,
      authors: "Lonang, S.",
      doi: "https://www.sciencedirect.com/science/article/pii/xxxxx",
      status: "Under Review",
      topics: ["ML", "Medical Informatics","Malnutrition"],
      bibtex: `@article{lonang2022klasifikasi,
  title={Kxxxxx},
  author={Lonang, S.},
  journal={xxxxx},
  year={2022}
}`
    },
    {
      title: "Attention-Based Named Entity Recognition for Indonesian Medical Texts",
      venue: "arXiv preprint arXiv:2024.xxxxx",
      year: 2024,
      authors: "Lonang, S.",
      doi: "https://arxiv.org/abs/2024.xxxxx",
      status: "Preprint",
      topics: ["NLP", "DL"],
      bibtex: `@article{lonang2024attention,
  title={Attention-Based Named Entity Recognition for Indonesian Medical Texts},
  author={Lonang, S.},
  journal={arXiv preprint arXiv:2024.xxxxx},
  year={2024}
}`
    }
  ],

  // ── Grants ──
  grants: [
    {
      name: "Efektif K-Nearest Neighbor Untuk Klasifikasi Status Stunting Pada Balita",
      funder: "Penelitian Tesis Magister - Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek)",
      year: "2023",
      value: "Rp 24.000.000",
      status: "Completed"
    },
    {
      name: "Pengembangan model machine learning yang efektif untuk deteksi dini penyakit jantung dengan hybrid feature selection",
      funder: "PDP — Penelitian Dosen Pemula - Kementerian Pendidikan Tinggi, Sains, dan Teknologi Republik Indonesia",
      year: "2025",
      value: "Rp 43.110.000",
      status: "Completed"
    },
    {
      name: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      funder: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      year: "xxxxx",
      value: "xxxxx",
      status: "Active"
    },
    {
      name: "xxxxxxxxxxx",
      funder: "Direktorat Riset dan Pengabdian Masyarakat (DRPM)",
      year: "2020 – 2022",
      value: "Rp xxxxxxx",
      status: "Completed"
    }
  ],

  // ── Projects ──
  projects: [
    {
      title: "IndoNLP Toolkit",
      description: "A comprehensive open-source NLP toolkit for Indonesian language processing, including tokenization, POS tagging, NER, and sentiment analysis with pre-trained models.",
      tech: ["Python", "PyTorch", "Hugging Face", "FastAPI"],
      category: "NLP",
      github: "https://github.com/ahmadrizalfauzi/indonlp-toolkit",
      demo: "https://indonlp-demo.vercel.app",
      image: null
    },
    {
      title: "DeepSentiment Analyzer",
      description: "A deep learning-based sentiment analysis platform for Indonesian social media, supporting multi-aspect sentiment classification with explainable AI.",
      tech: ["Python", "TensorFlow", "React", "Docker"],
      category: "Deep Learning",
      github: "https://github.com/ahmadrizalfauzi/deep-sentiment",
      demo: null,
      image: null
    },
    {
      title: "AutoML Pipeline for Academic Research",
      description: "An automated machine learning pipeline designed for academic researchers to quickly experiment with classification and regression tasks on research datasets.",
      tech: ["Python", "Scikit-learn", "Streamlit", "Docker"],
      category: "Machine Learning",
      github: "https://github.com/ahmadrizalfauzi/automl-research",
      demo: "https://automl-research.streamlit.app",
      image: null
    },
    {
      title: "AI Teaching Assistant Chatbot",
      description: "An intelligent chatbot powered by LLMs to assist students with course-related questions, assignment help, and learning material recommendations.",
      tech: ["Python", "LangChain", "OpenAI API", "Flask"],
      category: "Aplikasi AI",
      github: "https://github.com/ahmadrizalfauzi/ai-ta-chatbot",
      demo: null,
      image: null
    },
    {
      title: "Nusantara Language Translation",
      description: "Neural machine translation system for low-resource Indonesian regional languages (Javanese, Sundanese, Balinese) using multilingual transformer models.",
      tech: ["Python", "PyTorch", "Hugging Face", "GCP"],
      category: "NLP",
      github: "https://github.com/ahmadrizalfauzi/nusantara-mt",
      demo: "https://nusantara-translate.vercel.app",
      image: null
    },
    {
      title: "Research Paper Recommender",
      description: "A content-based and collaborative filtering recommendation system for academic papers, leveraging citation networks and semantic embeddings.",
      tech: ["Python", "TensorFlow", "Neo4j", "FastAPI"],
      category: "Machine Learning",
      github: "https://github.com/ahmadrizalfauzi/paper-recommender",
      demo: null,
      image: null
    }
  ],

  // ── Certifications ──
  certifications: [
    {
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2023",
      link: "https://www.credential.net/xxxxx",
      category: "AI/ML",
      logo: "🏅"
    },
    {
      name: "Deep Learning Specialization",
      issuer: "deeplearning.ai (Coursera)",
      year: "2022",
      link: "https://coursera.org/verify/xxxxx",
      category: "AI/ML",
      logo: "🎓"
    },
    {
      name: "Natural Language Processing Specialization",
      issuer: "deeplearning.ai (Coursera)",
      year: "2022",
      link: "https://coursera.org/verify/xxxxx",
      category: "AI/ML",
      logo: "🎓"
    },
    {
      name: "AWS Certified Machine Learning – Specialty",
      issuer: "Amazon Web Services",
      year: "2023",
      link: "https://aws.amazon.com/verification",
      category: "Cloud",
      logo: "☁️"
    },
    {
      name: "Google Cloud Professional Machine Learning Engineer",
      issuer: "Google Cloud",
      year: "2023",
      link: "https://google.accredible.com/xxxxx",
      category: "Cloud",
      logo: "☁️"
    },
    {
      name: "Certified University Educator",
      issuer: "Kementerian Pendidikan (Sertifikasi Dosen)",
      year: "2020",
      link: null,
      category: "Teaching",
      logo: "📚"
    }
  ],

  // ── Teaching ──
  teaching: {
    courses: [
      { name: "Kecerdasan Buatan (Artificial Intelligence)", semester: "Ganjil 2024/2025", materialsUrl: null },
      { name: "Pembelajaran Mesin (Machine Learning)", semester: "Genap 2024/2025", materialsUrl: "#" },
      { name: "Pemrosesan Bahasa Alami (NLP)", semester: "Ganjil 2024/2025", materialsUrl: "#" },
      { name: "Deep Learning & Neural Networks", semester: "Genap 2023/2024", materialsUrl: null },
      { name: "Struktur Data & Algoritma", semester: "Ganjil 2023/2024", materialsUrl: null },
      { name: "Data Mining & Knowledge Discovery", semester: "Genap 2023/2024", materialsUrl: "#" },
    ],
    stats: {
      undergraduateStudents: 45,
      graduateStudents: 12,
      totalCourses: 18,
    }
  },

  // ── Contact ──
  contact: {
    email: "lonang@uniqhba.ac.id",
    personalEmail: "lonangsyahrani3@gmail.com",
    office: "Gedung Fakultas Sains dan Teknologi, Lantai 2, Ruang Dosen FST",
    phone: "+62 87 XXXX XXXX",
  }
};
