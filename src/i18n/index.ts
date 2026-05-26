export type Lang = 'ja' | 'en';

export const ui = {
  ja: {
    nav: {
      langLabel: 'EN',
      langHref: '/en/',
    },
    hero: {
      greeting: 'Software Engineer',
      name: 'Takeru Ota',
      tagline: 'Sony Honda Mobility  /  Waseda University, M.Eng.',
      ctaWork: '実績を見る',
      ctaContact: 'お問い合わせ',
    },
    about: {
      sectionNum: '01.',
      sectionTitle: 'About',
      body: [
        '<span class="highlight">ソニー・ホンダモビリティ</span>のモバイルアプリ開発チームに所属するソフトウェアエンジニアです。早稲田大学大学院で工学修士を取得し、量子コンピュータを用いた組合せ最適化アルゴリズムの研究に取り組みました。',
        '大学院在学中は、研究室発ベンチャー<span class="highlight">Quanmatic</span>で長期インターンとして従事し、バックエンドAPI・クラウドインフラ・フロントエンドUI・UI/UXデザインをエンドツーエンドで担当しました。',
        '新しい技術を実際の問題解決に結びつけることを大切にしています。研究では量子・古典ハイブリッドアルゴリズムが、従来手法では届かなかったスケールの最適化問題を解けることを実証しました。',
      ],
      timeline: [
        {
          date: '2026.04',
          title: 'ソニー・ホンダモビリティ株式会社',
          sub: 'ソフトウェアエンジニア — モバイルアプリ開発チーム',
          accent: true,
        },
        {
          date: '2026.03',
          title: '早稲田大学大学院 修士（工学）',
          sub: '基幹理工学研究科 情報理工・情報通信専攻',
        },
        {
          date: '2024.04',
          title: '早稲田大学大学院',
          sub: '量子コンピュータを用いた組合せ最適化アルゴリズムの研究',
        },
        {
          date: '2023.05',
          title: '株式会社Quanmatic — 長期インターン',
          sub: 'フルスタック開発：FastAPI · Next.js · AWS · UI/UX',
        },
        {
          date: '2020.04',
          title: '早稲田大学 基幹理工学部 入学',
          sub: '情報通信学科',
        },
      ],
      interestsLabel: '趣味',
      interests: [
        { name: 'カメラ',       note: 'Sony α7III を愛用' },
        { name: 'ドライブ',     note: '撮影旅行' },
        { name: 'ゲーム',       note: 'PS5, Gran Turismo' },
        { name: 'サッカー観戦', note: 'フットサルも偶にやります' },
      ],
    },
    skills: {
      sectionNum: '02.',
      sectionTitle: 'Skills',
      categories: [
        {
          label: 'フロントエンド・モバイル',
          skills: [
            { name: 'HTML / CSS', years: '8yr' },
            { name: 'TypeScript', years: '4yr' },
            { name: 'React / Next.js', years: '4yr' },
            { name: 'Swift / SwiftUI', years: '5yr' },
            { name: 'Flutter / Dart', years: '3yr' },
            { name: 'Kotlin / KMP', years: '3mo' },
          ],
        },
        {
          label: 'バックエンド・データベース',
          skills: [
            { name: 'Python / FastAPI', years: '6yr' },
            { name: 'PostgreSQL', years: '1yr' },
            { name: 'PHP / WordPress', years: '1yr' },
            { name: 'Java', years: '1yr' },
          ],
        },
        {
          label: 'クラウド・インフラ',
          skills: [
            { name: 'AWS', years: '4yr' },
            { name: 'Docker', years: '3yr' },
            { name: 'Linux', years: '3yr' },
            { name: 'Google Cloud', years: '1yr' },
          ],
        },
        {
          label: '研究・AI',
          skills: [
            { name: 'Qiskit', years: '4yr' },
            { name: 'PyTorch', years: '4yr' },
            { name: 'Fixstars Amplify', years: '4yr' },
            { name: 'LangGraph', years: '' },
            { name: 'Strands Agents', years: '' },
            { name: 'MCP', years: '' },
          ],
        },
        {
          label: 'デザイン・ツール',
          skills: [
            { name: 'Figma / UI&UX', years: '5yr' },
            { name: 'Git / GitHub', years: '6yr' },
            { name: 'Jira / Confluence', years: '3yr' },
            { name: 'C', years: '3yr' },
          ],
        },
      ],
    },
    works: {
      sectionNum: '03.',
      sectionTitle: 'Works',
      detailLabel: '詳細',
      detailFeaturesHeading: '主な機能',
      festivalAppName: 'アプリコ',
      projects: [
        {
          num: '01',
          category: '研究・オープンソース',
          title: '個人化履修選択最適化システム',
          period: '2022 — 2026',
          description:
            '大学生の履修選択を量子組合せ最適化問題として初めて学術的にモデル化。pVSQAを適用した量子・古典ハイブリッドアプローチを提案し、ゲート式量子コンピュータで500変数のインスタンスを求解することに成功。本分野における規模の記録を達成。',
          tech: [
            'Python',
            'Qiskit',
            'PyTorch',
            'Fixstars Amplify',
            'FastAPI',
            'AWS',
          ],
          links: [
            { label: 'App', href: 'https://qlasop.vercel.app/' },
            { label: 'GitHub', href: 'https://github.com/t4ke1u/qlasop-app' },
            {
              label: 'IEEE Access',
              href: 'https://ieeexplore.ieee.org/author/308719292671247',
            },
          ],
          featured: true,
          features: [
            '学生の趣向・登校日数・空きコマ・単位数を同時に考慮した数理モデルを独自開発',
            '量子・古典ハイブリッドアルゴリズム pVSQA を履修最適化に初適用',
          ],
        },
        {
          num: '02',
          category: 'インターン・Quanmatic',
          title: '業務データ管理アプリ',
          period: '2023 — 2024',
          description:
            '量子最適化ワークフローで使用する業務データの管理・クレンジングのための社内ツールをエンドツーエンドで開発。FigmaでUI/UXを設計し、FastAPIバックエンドとNext.jsフロントエンドをソロで実装。',
          tech: ['FastAPI', 'Next.js', 'PostgreSQL', 'AWS', 'Figma'],
          links: [],
          featured: false,
          features: [],
        },
        {
          num: '03',
          category: 'インターン・Quanmatic',
          title: 'LLM × 量子最適化 Webアプリ（PoC）',
          period: '2024 — 2025',
          description:
            '自然言語で量子最適化エンジンを操作できるWebアプリのPoCを企画・開発。LLM推論・Web検索・DB検索・最適化ソルバーをMCPで接続し、社内検証まで完遂。',
          tech: ['LangGraph', 'MCP', 'LLM APIs', 'FastAPI', 'Next.js'],
          links: [],
          featured: false,
          features: [
            '自然言語で指示するだけで経路・スケジュールを量子最適化エンジンで最適化',
            'Strands Agents を使い MCP で最適化・RAG・Web検索エージェントをオーケストレーション',
            '社内検証まで完遂し、実用 PoC として評価',
          ],
        },
        {
          num: '04',
          category: '個人プロジェクト・ソニー・ホンダモビリティ',
          title: 'Issue → PR 自動生成 CI/CD',
          period: '2026',
          description:
            'GitHub ActionsとClaude Codeを組み合わせ、IssueからコードとPRを自動生成するCI/CDパイプラインを構築。SHMの商用モバイルアプリにおける定型機能開発のフィードバックループを短縮。',
          tech: ['GitHub Actions', 'Claude Code', 'Kotlin / KMP'],
          links: [],
          featured: false,
          features: [],
        },
        {
          num: '05',
          category: 'サークル活動・早稲田大学',
          title: '大学祭公式アプリ「アプリコ」',
          period: '2020 — 2022',
          description:
            '理工展連絡会の一員として、来場者向けモバイルアプリとWebサイトを開発・運用。コーディングだけでなく、UI/UXデザイン・ロゴデザイン・ブランディングも手がけた。3年目にIT部門長を務め、3学年にまたがる30名のチームを要件定義・オンボーディング・リリースまで主導。',
          tech: ['Swift / UIKit', 'Flutter', 'React', 'Google Cloud'],
          links: [
            { label: 'App Store', href: 'https://apps.apple.com/jp/app/%E6%97%A9%E7%A8%B2%E7%94%B0%E5%A4%A7%E5%AD%A6%E7%90%86%E5%B7%A5%E5%B1%95%E3%83%91%E3%83%B3%E3%83%95%E3%83%AC%E3%83%83%E3%83%88%E3%82%A2%E3%83%97%E3%83%AA-%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B3/id1438321497' },
          ],
          featured: false,
          features: ['企画の検索', 'QRコードを用いたスタンプラリー', '飲食店のクーポンのくじ引き'],
        },
      ],
    },
    research: {
      sectionNum: '04.',
      sectionTitle: 'Research',
      overviewTitle: '量子コンピュータを用いた組合せ最適化',
      body: [
        '私の研究は、古典コンピュータでは計算困難な組合せ最適化問題を量子コンピュータで解くことを目指しています。大学生の履修選択を<em>個人化履修最適化問題</em>として新たにNP困難問題として定式化し、初の量子ベースモデルを提案。量子・古典ハイブリッドアルゴリズムを本問題に適用し、ゲート式量子コンピュータでの応用分野のユースケースを探求しました。',
        '修士研究では、大規模問題分割と変分量子補正アルゴリズムの統合手法を開発し、ゲート式量子コンピュータで<span class="highlight">500変数</span>の求解に成功。本分野における規模の記録を達成しました。<br>本研究は、<strong>富士通研究所 量子研究所</strong>と共同で行いました。',
      ],
      statsNums: [3, 9, 9],
      statsLabels: ['件の論文誌', '件の国際学会', '件の国内学会'],
      ieeeLabel: 'IEEE 著者プロフィール ↗',
      awardsTitle: '受賞歴',
      awards: [
        {
          title: 'ICCE 2025 Best Session Presentation Award',
          org: 'IEEE International Conference on Consumer Electronics',
          year: 'Jan. 2025',
        },
        {
          title: '早稲田大学大学院 専攻賞',
          org: '基幹理工学研究科 情報理工・情報通信専攻',
          year: '2025',
        },
        {
          title: '情報処理学会 デザインガイア 2025 優秀ポスター賞',
          org: '情報処理学会',
          year: 'Dec. 2025',
        },
      ],
      papersTitle: '主要論文',
      papers: [
        {
          type: '論文誌',
          title:
            'An Ising Machine Approach to the Personalized Course Selection Problem',
          authors: 'T. Ota, K. Fukada, and N. Togawa',
          venue: 'IEEE Access, vol.13, pp. 152148–152160, 2025.',
          doi: 'https://doi.org/10.1109/ACCESS.2025.3603606',
        },
        {
          type: '国際学会',
          title:
            'Hybrid Quantum-Classical Framework based on subQUBO and pVSQA',
          authors:
            'T. Ota, T. Shirai, M. Morita, K. Kimura, Y. Takita, and N. Togawa',
          venue: 'APS Global Physics Summit 2026.',
          doi: null,
        },
        {
          type: '国際学会',
          title:
            'Course Selection Optimization using pVSQA on Quantum Computers',
          authors: 'T. Ota, T. Shirai, and N. Togawa',
          venue: 'IEEE ICCE-Berlin 2025, pp. 207–210.',
          doi: 'https://doi.org/10.1109/ICCE-Berlin67488.2025.11277633',
        },
        {
          type: '国際学会',
          title:
            'Evaluating pVSQA for Large-Sized Constrained Optimization on Quantum Simulator',
          authors: 'T. Ota et al.',
          venue: 'IEEE QCE 2025, vol.02, pp. 396–397.',
          doi: 'https://doi.org/10.1109/QCE65121.2025.10363',
        },
      ],
      allPapersLabel: 'すべての発表を見る',
      allPapersModalTitle: '発表実績',
      allPaperCategories: [
        {
          heading: '論文誌（査読付）',
          items: [
            { authors: 'S. Inaba, T. Ota, and N. Togawa', title: 'QUBO Simplification by Singular Value Decomposition and Coefficient Elimination for Ising Machines', venue: 'IEEE Access, vol.14, pp. 59780–59793, 2026.', doi: 'https://doi.org/10.1109/ACCESS.2026.3684571' },
            { authors: 'T. Ota, K. Fukada, and N. Togawa', title: 'An Ising Machine Approach to the Personalized Course Selection Problem', venue: 'IEEE Access, vol.13, pp. 152148–152160, 2025.', doi: 'https://doi.org/10.1109/ACCESS.2025.3603606' },
          ],
        },
        {
          heading: '国際会議（査読付）',
          items: [
            { authors: 'T. Ota, T. Shirai, M. Morita, K. Kimura, Y. Takita, and N. Togawa', title: 'Hybrid Quantum-Classical Framework based on subQUBO and pVSQA', venue: 'APS Global Physics Summit 2026.', doi: null },
            { authors: 'R. Aoki, T. Ota, T. Shirai, and N. Togawa', title: 'Constraint-Parameterized Spin-Variable Reduction Method for QAP', venue: 'IEEE ICCE 2026.', doi: null },
            { authors: 'T. Ota, T. Shirai, and N. Togawa', title: 'Course Selection Optimization using pVSQA on Quantum Computers', venue: 'IEEE ICCE-Berlin 2025, pp. 207–210.', doi: 'https://doi.org/10.1109/ICCE-Berlin67488.2025.11277633' },
            { authors: 'K. Mita, T. Ota, and N. Togawa', title: 'SubQUBO Construction Based on Grid Reduction Method Using an Ising Machine', venue: 'IEEE QCE 2025, vol.02, pp. 486–487.', doi: 'https://doi.org/10.1109/QCE65121.2025.10408' },
            { authors: 'T. Ota, T. Shirai, M. Morita, K. Kimura, Y. Takita, and N. Togawa', title: 'Evaluating pVSQA for Large-Sized Constrained Optimization on Quantum Simulator', venue: 'IEEE QCE 2025, vol.02, pp. 396–397.', doi: 'https://doi.org/10.1109/QCE65121.2025.10363' },
            { authors: 'S. Inaba, T. Ota, C. Dogo, K. Saito, and N. Togawa', title: 'QUBO Simplification Method for Improving Solution Convergence Speed Using an Ising Machine', venue: 'IEEE QCE 2025, vol.02, pp. 492–493.', doi: 'https://doi.org/10.1109/QCE65121.2025.10411' },
            { authors: 'T. Ota, K. Fukada, T. Shirai, and N. Togawa', title: 'Personalized Course Selection Optimization Using QAOA', venue: 'IEEE ICCE 2025, pp. 1–2.', doi: 'https://doi.org/10.1109/ICCE63647.2025.10930007' },
            { authors: 'T. Ota, K. Fukada, and N. Togawa', title: 'Personalized Course Selection Optimization Using an Ising Machine', venue: 'IEEE QCE 2024, vol.02, pp. 430–431.', doi: 'https://doi.org/10.1109/QCE60285.2024.10340' },
          ],
        },
        {
          heading: '国際会議（査読無）',
          items: [
            { authors: 'T. Ota, K. Fukada, and N. Togawa', title: 'Optimizing Personalized Course Selection via an Ising Machine', venue: 'INQA 2024.', doi: null },
          ],
        },
        {
          heading: '国内学会',
          items: [
            { authors: '高橋 俊介, 太田 岳, 戸川 望', title: 'イジングマシンを用いた動的待ち時間と休憩を考慮したアミューズメントパーク経路最適化手法', venue: 'VLSI 設計技術研究会, Mar. 2026.', doi: null },
            { authors: '長谷川 椋大, 冨田 柊, 太田 岳, 戸川 望', title: 'イジングマシンによるFormula 1レース開催スケジュール最適化問題の求解と評価', venue: 'VLSI 設計技術研究会, Mar. 2026.', doi: null },
            { authors: '太田 岳, 白井 達彦, 戸川 望', title: 'FMAのためのランク学習を用いたQUBO構築手法', venue: 'デザインガイア 2025, Dec. 2025. ★優秀ポスター賞', doi: null },
            { authors: '田中 綺珠, 梶 翔馬, 太田 岳, 池上 裕香, 鮑 思雅, 戸川 望', title: 'イジングマシンと大規模言語モデルによる複数日旅程計画問題へのアプローチ', venue: 'デザインガイア 2025, Dec. 2025. ★優秀ポスター賞', doi: null },
            { authors: '青木 来生, 太田 岳, 白井 達彦, 戸川 望', title: '制約パラメータ化を用いたスピン変数削減手法', venue: 'デザインガイア 2025, Dec. 2025.', doi: null },
            { authors: '太田 岳, 白井 達彦, 戸川 望', title: 'pVSQAを用いた履修最適化の一検討', venue: 'VLSI 設計技術研究会, Jun. 2025.', doi: null },
            { authors: '三田 光希, 深田 佳祐, 太田 岳, 戸川 望', title: 'イジングマシンを用いた格子点削除法によるsubQUBO構築の評価', venue: 'VLSI 設計技術研究会, Jun. 2025.', doi: null },
            { authors: '太田 岳, 深田 佳祐, 白井 達彦, 戸川 望', title: 'QAOAを用いた履修最適化の一検討', venue: 'デザインガイア 2024, Dec. 2024.', doi: null },
            { authors: '太田 岳, 深田 佳祐, 戸川 望', title: 'イジングマシンを用いた履修科目最適化', venue: 'VLSI 設計技術研究会, Jun. 2024.', doi: null },
          ],
        },
      ],
    },
    contact: {
      sectionNum: '05.',
      sectionTitle: 'Contact',
      eyebrow: '次のステップへ',
      heading: 'お問い合わせ',
      description:
        '現在は日本でソニー・ホンダモビリティに在籍していますが、面白いエンジニアリングの課題や研究コラボレーション、同じエンジニアとのつながりについていつでも歓迎しています。お気軽にメッセージをお送りください。',
      ctaGithub: 'GitHub ↗',
      ctaSayHello: 'メッセージを送る',
    },
    footer: {
      credit: 'デザイン・開発：',
    },
  },

  en: {
    nav: {
      langLabel: 'JA',
      langHref: '/',
    },
    hero: {
      greeting: 'Software Engineer',
      name: 'Takeru Ota',
      tagline: 'Sony Honda Mobility  /  Waseda University, M.Eng.',
      ctaWork: 'View my work',
      ctaContact: 'Get in touch',
    },
    about: {
      sectionNum: '01.',
      sectionTitle: 'About',
      body: [
        'I\'m a software engineer at <span class="highlight">Sony Honda Mobility</span>, working on the mobile app development team. I hold a Master\'s degree in Computer Science from Waseda University, where I researched quantum computing algorithms for combinatorial optimization.',
        'During my graduate studies, I simultaneously worked as a long-term intern at <span class="highlight">Quanmatic</span> — a university spin-off — where I built production systems spanning backend APIs, cloud infrastructure, frontend UIs, and UI/UX design end-to-end.',
        'I care about connecting new technology to real problems. My research showed that quantum-classical hybrid algorithms can solve optimization problems at scales previously out of reach — and I bring that same mindset to product engineering.',
      ],
      timeline: [
        {
          date: '2026.04',
          title: 'Sony Honda Mobility Inc.',
          sub: 'Software Engineer — Mobile App Development Team',
          accent: true,
        },
        {
          date: '2026.03',
          title: 'Waseda University, M.Eng.',
          sub: 'Graduate School of Fundamental Science and Engineering',
        },
        {
          date: '2024.04',
          title: 'Waseda University Graduate School',
          sub: 'Research on quantum combinatorial optimization algorithms',
        },
        {
          date: '2023.05',
          title: 'Quanmatic Inc. — Long-term Intern',
          sub: 'Full-stack development: FastAPI · Next.js · AWS · UI/UX',
        },
        {
          date: '2020.04',
          title: 'Waseda University, B.Eng.',
          sub: 'Department of Computer Science and Communications Engineering',
        },
      ],
      interestsLabel: 'Interests',
      interests: [
        { name: 'Photography', note: 'Sony α7III' },
        { name: 'Driving',     note: 'Road trips for photos' },
        { name: 'Gaming',      note: 'PS5, Gran Turismo' },
        { name: 'Football',    note: 'Casual futsal too' },
      ],
    },
    skills: {
      sectionNum: '02.',
      sectionTitle: 'Skills',
      categories: [
        {
          label: 'Frontend & Mobile',
          skills: [
            { name: 'HTML / CSS', years: '8yr' },
            { name: 'TypeScript', years: '4yr' },
            { name: 'React / Next.js', years: '4yr' },
            { name: 'Swift / SwiftUI', years: '5yr' },
            { name: 'Flutter / Dart', years: '3yr' },
            { name: 'Kotlin / KMP', years: '3mo' },
          ],
        },
        {
          label: 'Backend & Database',
          skills: [
            { name: 'Python / FastAPI', years: '6yr' },
            { name: 'PostgreSQL', years: '1yr' },
            { name: 'PHP / WordPress', years: '1yr' },
            { name: 'Java', years: '1yr' },
          ],
        },
        {
          label: 'Cloud & Infrastructure',
          skills: [
            { name: 'AWS', years: '4yr' },
            { name: 'Docker', years: '3yr' },
            { name: 'Linux', years: '3yr' },
            { name: 'Google Cloud', years: '1yr' },
          ],
        },
        {
          label: 'Research & AI',
          skills: [
            { name: 'Qiskit', years: '4yr' },
            { name: 'PyTorch', years: '4yr' },
            { name: 'Fixstars Amplify', years: '4yr' },
            { name: 'LangGraph', years: '' },
            { name: 'Strands Agents', years: '' },
            { name: 'MCP', years: '' },
          ],
        },
        {
          label: 'Design & Tools',
          skills: [
            { name: 'Figma / UI&UX', years: '5yr' },
            { name: 'Git / GitHub', years: '6yr' },
            { name: 'Jira / Confluence', years: '3yr' },
            { name: 'C', years: '3yr' },
          ],
        },
      ],
    },
    works: {
      sectionNum: '03.',
      sectionTitle: 'Works',
      detailLabel: 'Details',
      detailFeaturesHeading: 'Key Features',
      festivalAppName: 'AppRiko',
      projects: [
        {
          num: '01',
          category: 'Research · Open Source',
          title: 'Personalized Course Selection System',
          period: '2022 — 2026',
          description:
            'Modeled university course selection as a quantum combinatorial optimization problem for the first time in academic literature. Proposed a hybrid quantum-classical approach applying pVSQA, and successfully solved 500-variable instances on gate-model quantum computers — a scale record in the domain.',
          tech: [
            'Python',
            'Qiskit',
            'PyTorch',
            'Fixstars Amplify',
            'FastAPI',
            'AWS',
          ],
          links: [
            { label: 'App', href: 'https://qlasop.vercel.app/' },
            { label: 'GitHub', href: 'https://github.com/t4ke1u/qlasop-app' },
            {
              label: 'IEEE Access',
              href: 'https://ieeexplore.ieee.org/author/308719292671247',
            },
          ],
          featured: true,
          features: [
            'Original mathematical model accounting for preferences, commute days, free periods, and credit requirements simultaneously',
            'First application of the quantum-classical hybrid algorithm pVSQA to course selection optimization',
          ],
        },
        {
          num: '02',
          category: 'Internship · Quanmatic',
          title: 'Business Data Management App',
          period: '2023 — 2024',
          description:
            'Led end-to-end development of an internal tool to manage and clean operational data used for quantum optimization workflows. Designed the UI/UX in Figma, implemented the FastAPI backend, and built the Next.js frontend — all as a solo contributor.',
          tech: ['FastAPI', 'Next.js', 'PostgreSQL', 'AWS', 'Figma'],
          links: [],
          featured: false,
          features: [],
        },
        {
          num: '03',
          category: 'Internship · Quanmatic',
          title: 'LLM × Quantum Optimization Web App (PoC)',
          period: '2024 — 2025',
          description:
            'Conceived and built a proof-of-concept web app that lets users interact with a quantum optimization engine in natural language. Connected LLM inference, web search, database retrieval, and the optimization solver via MCP, then validated it internally.',
          tech: ['LangGraph', 'MCP', 'LLM APIs', 'FastAPI', 'Next.js'],
          links: [],
          featured: false,
          features: [
            'Natural language input drives the quantum optimization engine for route and schedule planning',
            'Strands Agents orchestrate optimization, RAG, and web search agents via MCP protocol',
            'Validated internally as a working proof-of-concept',
          ],
        },
        {
          num: '04',
          category: 'Side Project · Sony Honda Mobility',
          title: 'Issue-to-PR Auto-generation CI/CD',
          period: '2026',
          description:
            "Built a CI/CD pipeline using GitHub Actions and Claude Code that automatically generates implementation code from an issue description and opens a pull request — reducing the feedback loop for routine feature work on SHM's commercial mobile app.",
          tech: ['GitHub Actions', 'Claude Code', 'Kotlin / KMP'],
          links: [],
          featured: false,
          features: [],
        },
        {
          num: '05',
          category: 'Club Activity · Waseda University',
          title: 'Campus Festival App "AppRiko"',
          period: '2020 — 2022',
          description:
            'Developed and operated a mobile app and website for campus festival visitors as part of the Riko-ten Planning Committee — also leading UI/UX design, logo design, and branding for the app. In the third year, took on the IT Division Lead role, managing a 30-member cross-year team through requirements definition, onboarding, and release.',
          tech: ['Swift / UIKit', 'Flutter', 'React', 'Google Cloud'],
          links: [
            { label: 'App Store', href: 'https://apps.apple.com/jp/app/%E6%97%A9%E7%A8%B2%E7%94%B0%E5%A4%A7%E5%AD%A6%E7%90%86%E5%B7%A5%E5%B1%95%E3%83%91%E3%83%B3%E3%83%95%E3%83%AC%E3%83%83%E3%83%88%E3%82%A2%E3%83%97%E3%83%AA-%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B3/id1438321497' },
          ],
          featured: false,
          features: ['Event Search', 'QR Stamp Rally', 'Restaurant Coupon Lottery'],
        },
      ],
    },
    research: {
      sectionNum: '04.',
      sectionTitle: 'Research',
      overviewTitle: 'Quantum Computing for Combinatorial Optimization',
      body: [
        'My research addresses how quantum computers can solve combinatorial optimization problems that are computationally intractable for classical machines. I formalized <em>personalized course selection</em> as a new NP-hard optimization problem, proposed the first quantum-based model for it, and applied the hybrid quantum-classical algorithm <strong>pVSQA</strong> to successfully solve instances of up to <span class="highlight">500 variables</span> on a gate-model quantum computer — a scale record in the field.',
        "In my master's research, I collaborated with the <strong>Quantum Laboratory, Fujitsu Research</strong> on large-scale optimization benchmarks using subQUBO decomposition combined with variational quantum algorithms.",
      ],
      statsNums: [3, 9, 9],
      statsLabels: [
        'journal papers',
        'international conferences',
        'domestic conferences',
      ],
      ieeeLabel: 'IEEE Author Profile ↗',
      awardsTitle: 'Awards',
      awards: [
        {
          title: 'ICCE 2025 Best Session Presentation Award',
          org: 'IEEE International Conference on Consumer Electronics',
          year: 'Jan. 2025',
        },
        {
          title: 'Graduate School Academic Excellence Award',
          org: 'Waseda University — Dept. of Computer Science and Communications Engineering',
          year: '2025',
        },
        {
          title: 'IPSJ Design Gaia 2025 Best Poster Award',
          org: 'Information Processing Society of Japan',
          year: 'Dec. 2025',
        },
      ],
      papersTitle: 'Selected Publications',
      papers: [
        {
          type: 'Journal',
          title:
            'An Ising Machine Approach to the Personalized Course Selection Problem',
          authors: 'T. Ota, K. Fukada, and N. Togawa',
          venue: 'IEEE Access, vol.13, pp. 152148–152160, 2025.',
          doi: 'https://doi.org/10.1109/ACCESS.2025.3603606',
        },
        {
          type: "Int'l Conf.",
          title:
            'Hybrid Quantum-Classical Framework based on subQUBO and pVSQA',
          authors:
            'T. Ota, T. Shirai, M. Morita, K. Kimura, Y. Takita, and N. Togawa',
          venue: 'APS Global Physics Summit 2026.',
          doi: null,
        },
        {
          type: "Int'l Conf.",
          title:
            'Course Selection Optimization using pVSQA on Quantum Computers',
          authors: 'T. Ota, T. Shirai, and N. Togawa',
          venue: 'IEEE ICCE-Berlin 2025, pp. 207–210.',
          doi: 'https://doi.org/10.1109/ICCE-Berlin67488.2025.11277633',
        },
        {
          type: "Int'l Conf.",
          title:
            'Evaluating pVSQA for Large-Sized Constrained Optimization on Quantum Simulator',
          authors: 'T. Ota et al.',
          venue: 'IEEE QCE 2025, vol.02, pp. 396–397.',
          doi: 'https://doi.org/10.1109/QCE65121.2025.10363',
        },
      ],
      allPapersLabel: 'View all publications',
      allPapersModalTitle: 'Publications',
      allPaperCategories: [
        {
          heading: 'Journal Papers (peer-reviewed)',
          items: [
            { authors: 'S. Inaba, T. Ota, and N. Togawa', title: 'QUBO Simplification by Singular Value Decomposition and Coefficient Elimination for Ising Machines', venue: 'IEEE Access, vol.14, pp. 59780–59793, 2026.', doi: 'https://doi.org/10.1109/ACCESS.2026.3684571' },
            { authors: 'T. Ota, K. Fukada, and N. Togawa', title: 'An Ising Machine Approach to the Personalized Course Selection Problem', venue: 'IEEE Access, vol.13, pp. 152148–152160, 2025.', doi: 'https://doi.org/10.1109/ACCESS.2025.3603606' },
          ],
        },
        {
          heading: "International Conferences (peer-reviewed)",
          items: [
            { authors: 'T. Ota, T. Shirai, M. Morita, K. Kimura, Y. Takita, and N. Togawa', title: 'Hybrid Quantum-Classical Framework based on subQUBO and pVSQA', venue: 'APS Global Physics Summit 2026.', doi: null },
            { authors: 'R. Aoki, T. Ota, T. Shirai, and N. Togawa', title: 'Constraint-Parameterized Spin-Variable Reduction Method for QAP', venue: 'IEEE ICCE 2026.', doi: null },
            { authors: 'T. Ota, T. Shirai, and N. Togawa', title: 'Course Selection Optimization using pVSQA on Quantum Computers', venue: 'IEEE ICCE-Berlin 2025, pp. 207–210.', doi: 'https://doi.org/10.1109/ICCE-Berlin67488.2025.11277633' },
            { authors: 'K. Mita, T. Ota, and N. Togawa', title: 'SubQUBO Construction Based on Grid Reduction Method Using an Ising Machine', venue: 'IEEE QCE 2025, vol.02, pp. 486–487.', doi: 'https://doi.org/10.1109/QCE65121.2025.10408' },
            { authors: 'T. Ota, T. Shirai, M. Morita, K. Kimura, Y. Takita, and N. Togawa', title: 'Evaluating pVSQA for Large-Sized Constrained Optimization on Quantum Simulator', venue: 'IEEE QCE 2025, vol.02, pp. 396–397.', doi: 'https://doi.org/10.1109/QCE65121.2025.10363' },
            { authors: 'S. Inaba, T. Ota, C. Dogo, K. Saito, and N. Togawa', title: 'QUBO Simplification Method for Improving Solution Convergence Speed Using an Ising Machine', venue: 'IEEE QCE 2025, vol.02, pp. 492–493.', doi: 'https://doi.org/10.1109/QCE65121.2025.10411' },
            { authors: 'T. Ota, K. Fukada, T. Shirai, and N. Togawa', title: 'Personalized Course Selection Optimization Using QAOA', venue: 'IEEE ICCE 2025, pp. 1–2.', doi: 'https://doi.org/10.1109/ICCE63647.2025.10930007' },
            { authors: 'T. Ota, K. Fukada, and N. Togawa', title: 'Personalized Course Selection Optimization Using an Ising Machine', venue: 'IEEE QCE 2024, vol.02, pp. 430–431.', doi: 'https://doi.org/10.1109/QCE60285.2024.10340' },
          ],
        },
        {
          heading: 'International Conferences (non-peer-reviewed)',
          items: [
            { authors: 'T. Ota, K. Fukada, and N. Togawa', title: 'Optimizing Personalized Course Selection via an Ising Machine', venue: 'INQA 2024.', doi: null },
          ],
        },
        {
          heading: 'Domestic Conferences (Japanese)',
          items: [
            { authors: '高橋 俊介, 太田 岳, 戸川 望', title: 'イジングマシンを用いた動的待ち時間と休憩を考慮したアミューズメントパーク経路最適化手法', venue: 'VLSI 設計技術研究会, Mar. 2026.', doi: null },
            { authors: '長谷川 椋大, 冨田 柊, 太田 岳, 戸川 望', title: 'イジングマシンによるFormula 1レース開催スケジュール最適化問題の求解と評価', venue: 'VLSI 設計技術研究会, Mar. 2026.', doi: null },
            { authors: '太田 岳, 白井 達彦, 戸川 望', title: 'FMAのためのランク学習を用いたQUBO構築手法', venue: 'デザインガイア 2025, Dec. 2025. ★優秀ポスター賞', doi: null },
            { authors: '田中 綺珠, 梶 翔馬, 太田 岳, 池上 裕香, 鮑 思雅, 戸川 望', title: 'イジングマシンと大規模言語モデルによる複数日旅程計画問題へのアプローチ', venue: 'デザインガイア 2025, Dec. 2025. ★優秀ポスター賞', doi: null },
            { authors: '青木 来生, 太田 岳, 白井 達彦, 戸川 望', title: '制約パラメータ化を用いたスピン変数削減手法', venue: 'デザインガイア 2025, Dec. 2025.', doi: null },
            { authors: '太田 岳, 白井 達彦, 戸川 望', title: 'pVSQAを用いた履修最適化の一検討', venue: 'VLSI 設計技術研究会, Jun. 2025.', doi: null },
            { authors: '三田 光希, 深田 佳祐, 太田 岳, 戸川 望', title: 'イジングマシンを用いた格子点削除法によるsubQUBO構築の評価', venue: 'VLSI 設計技術研究会, Jun. 2025.', doi: null },
            { authors: '太田 岳, 深田 佳祐, 白井 達彦, 戸川 望', title: 'QAOAを用いた履修最適化の一検討', venue: 'デザインガイア 2024, Dec. 2024.', doi: null },
            { authors: '太田 岳, 深田 佳祐, 戸川 望', title: 'イジングマシンを用いた履修科目最適化', venue: 'VLSI 設計技術研究会, Jun. 2024.', doi: null },
          ],
        },
      ],
    },
    contact: {
      sectionNum: '05.',
      sectionTitle: 'Contact',
      eyebrow: "What's next?",
      heading: 'Get In Touch',
      description:
        "I'm currently based in Japan working at Sony Honda Mobility, and I'm always open to discussing interesting engineering challenges, research collaborations, or just connecting with fellow engineers. My inbox is open — feel free to reach out.",
      ctaGithub: 'GitHub ↗',
      ctaSayHello: 'Say Hello',
    },
    footer: {
      credit: 'Designed & Built by',
    },
  },
} as const;
