// サイトの全コンテンツ。公開サイト用に勤務先名・社内システム名・社内試算の金額・未公開の予定は載せていない。

export const profile = {
  name: 'Ikkei Miyata',
  nameJa: '宮田 一慶',
  role: 'DX推進 / 業務システム内製 / 生成AI基盤',
  location: '愛知県',
  statement:
    '営業職として入社し、独学で身につけたプログラミングを足がかりにシステム部門へ。入社7年目に新設されたDX推進部門の責任者となり、約100名規模の共済団体で、業務システムの内製・RPA・生成AI基盤を企画から設計・開発・運用まで一人で通して進めています。',
  email: 'ikkei812@gmail.com',
  github: 'https://github.com/ikkeiman',
}

export const stats = [
  { value: '30,000', unit: '行', label: '一人で設計・開発した営業支援システム' },
  { value: '1,140', unit: '時間 / 年', label: 'RPAで削減した定型作業' },
  { value: '50', unit: 'アプリ', label: 'Notesからkintoneへ移行・再設計' },
]

export const works = [
  {
    id: 'sales',
    index: '01',
    title: '地図 × GPS × AI の営業支援システム',
    period: '2024 – 2026',
    role: '企画 / 要件定義 / 画面・API・DB設計 / 開発 / 運用',
    stack: ['Vue 3', 'Python / FastAPI', 'PostgreSQL / PostGIS', 'kintone API', 'GPS'],
    problem:
      '営業員の顧客情報と活動記録が複数の台帳に分かれ、「次に誰を訪ねるべきか」が経験と勘に頼っていた。',
    approach:
      '地図上で顧客を管理し、GPSで活動を自動記録して分析、AIが週次の分析レポートを生成する仕組みを設計。ポイントとバッジで日々の活動を可視化し、営業職の経験から「毎日開きたくなる画面」を優先した。画面11・API約35本・テーブル18を一人で実装。',
    result:
      '約30,000行を単独で開発し、現場の評価を受けて対象部署を広げる方針に。外部サービス（kintone・地図・GPS）との連携を含め、運用まで担当。',
    diagram: true,
  },
  {
    id: 'ai',
    index: '02',
    title: '全職員向け 生成AI基盤',
    period: '2026 –',
    role: '構成設計 / 要件定義 / 画面・API設計 / 開発 / 関係部署・経営層への説明',
    stack: ['Python', 'LLM API', 'ローカルLLM', 'セキュリティ設計'],
    problem:
      '生成AIを使いたい声は強い一方、情報漏えいへの懸念から組織として利用を控えていた。「禁止」のままでは現場の生産性もリテラシーも上がらない。',
    approach:
      '利用者を「全職員向けの基本チャット」と「認定を受けた職員向けの作成・分析AI」の2層に分け、入力を社内で判定して個人情報・機微情報を止めてから外部のLLMへ送る構成を設計。あわせてAI利用のルールと、基礎・応用の2段階の認定制度（教材と認定試験）を作成した。',
    result:
      '対象は100〜200人。要件定義から開発までを一人で担当し、セキュリティ・コンプライアンス部門と連携して導入を進めている。',
  },
  {
    id: 'local-ai',
    index: '03',
    title: 'ローカルLLMで動く業務ツール',
    period: '2025 – 2026',
    role: '企画 / 設計 / 開発 / 現場テスト',
    stack: ['C# / .NET 8 / WPF', 'Python', 'Ollama', 'draw.io'],
    problem:
      '業務マニュアルと業務フロー図の作成に時間がかかり、作っても更新されない。クラウドAIは情報の持ち出しが懸念される。',
    approach:
      'PC操作を記録してWordのマニュアルを自動生成するツール（C#）と、Excel・Word・PDFからAIで業務フロー図を起こし、画面上で編集できるツール（Python・draw.io組み込み）を開発。どちらも社内のローカルLLMで完結させ、データを外に出さない構成にした。',
    result:
      'AIを使った開発で短期間に形にし、現場メンバーとテストを実施。社内完結の構成でセキュリティ面の懸念を解消した。',
  },
  {
    id: 'rpa',
    index: '04',
    title: 'RPA と業務自動化の推進',
    period: '2019 –',
    role: 'ヒアリング / 選定 / 開発 / 推進体制の設計',
    stack: ['RPA', 'AI-OCR', 'Python', 'kintone', 'Excel VBA'],
    problem: '部署ごとに紙と手作業の定型業務が残り、どこから自動化すべきかの優先順位がなかった。',
    approach:
      '6部署にヒアリングして59件の候補から39件を選定。紙の帳票をAI-OCRで読み取りkintoneへ自動登録する仕組みなどを構築し、案件の受付をkintoneに一本化、各部署に窓口を置く体制に見直した。',
    result:
      '計34件を管理し、稼働中・開発中の28件で年間約1,140時間を削減。Notes終了に伴う約50アプリのkintone移行も設計・開発した。',
  },
  {
    id: 'dx',
    index: '05',
    title: 'DXを進めるための仕組みづくり',
    period: '2024 –',
    role: 'DX推進部門 責任者 / 会議運営 / 制度設計 / 研修講師',
    stack: ['kintone', 'KPI設計', '評価制度', '脆弱性チェック'],
    problem:
      '新設部門で他部署への指示権限はほとんどない。それでも各部署が自分からDXに取り組む状態を作る必要があった。',
    approach:
      '案件の提案から実施・評価までの流れをkintoneで整え、案件ごとにKPIと撤退基準を決める運用に。DXへの貢献を人事評価に組み込む制度案、内製プログラムのリリース前に脆弱性を調べるチェックの仕組み、新卒向けシステム研修も自分で用意した。',
    result:
      '管理職が参加するDX推進会議を週次で運営し、失敗しても進め方を評価する形にして挑戦しやすくした。',
  },
  {
    id: 'mopo',
    index: '06',
    title: 'mopo — 「行きたい」を「行った」に変えるお出かけアプリ',
    period: '2026 – 個人開発',
    role: '企画 / 要件定義 / 事業計画 / 設計 / 試作',
    stack: ['React 19', 'Capacitor', 'Vue 3', 'Google Maps Platform', 'Claude Code'],
    problem:
      'SNSで見つけた店を保存しても、リストに積み上がるだけで消化されない。当日はスマホばかり見てしまい、目の前の体験に集中できない。',
    approach:
      '行きたい場所をためて、当日は迷わず回れることに機能を絞った。現地でのデータ実測とGoogle Maps Platform規約の精読を経て要件定義書を第8版まで改訂し、Web / iOS / Android共通の基盤を試作中。',
    result:
      'Claude Code・Codex・Discordを組み合わせたチーム開発基盤も整備。店舗から対価を受け取らない設計で、おすすめの公平性を構造的に担保する方針。',
    link: 'https://github.com/ikkeiman',
  },
  {
    id: 'guard',
    index: '07',
    title: 'llm-guard-gateway — 送る前に止める LLM 入力ガード',
    period: '2026 – 公開リポジトリ',
    role: '設計 / 実装 / 評価設計',
    stack: ['Python / FastAPI', 'GiNZA', 'Ollama', 'OpenAI 互換 API', 'pytest / GitHub Actions'],
    problem:
      '02 の生成AI基盤の中核「入力を判定して個人情報を止めてから外部LLMへ送る」を、会社固有のルールやコードと切り離して公開できる形で示したかった。',
    approach:
      '一般的な日本の個人情報（個人番号・電話・住所・メール・カード・口座・氏名）を対象に、ルール → 固有表現抽出 → ローカルLLM判定の3段階で検査し、マスク／拒否／保留を設定で選べる OpenAI 互換プロキシとして一から作り直した。合成データ500件で見逃し率・止めすぎ率・応答時間を測る評価ハーネスを同梱。',
    result:
      '既定設定で見逃し 2.8%・止めすぎ 0.0%（合成データでの参考値）。評価で見つかった「LLMが住所や番号を個人情報でないと判断する」問題を、候補を渡す聞き方と検証済み番号の保護で解決した経緯も README に残した。',
    link: 'https://github.com/ikkeiman/llm-guard-gateway',
  },
  {
    id: 'mcp-guide',
    index: '08',
    title: 'secure-mcp-server-guide — Claude Desktop に入れる MCP サーバーの安全な作り方',
    period: '2026 – 公開リポジトリ',
    role: '調査 / 設計案の比較 / 参照実装',
    stack: ['MCP（公式 Python SDK）', 'Python', 'pytest / GitHub Actions'],
    problem:
      'ローカルのMCPサーバーは利用者の権限で動く子プロセスで、本文に混ざった指示によるツールの悪用や、許可していないフォルダの読み取りが起きうる。',
    approach:
      '脅威を10項目に整理し、よくある実装の問題点、4つの設計案（単機能／ポリシー層／コンテナ／ゲートウェイ）の比較、導入前のチェックリストをまとめた。推奨案「読み取り専用・許可リストの単機能サーバー」を参照実装し、パストラバーサルやシンボリックリンクのテストで固定。',
    result:
      '公式の仕様とドキュメントで確認できた事実だけを書き、確認できなかった点は「要確認」と明記。設定例は Claude Desktop の公式ドキュメントにある形式に限定した。',
    link: 'https://github.com/ikkeiman/secure-mcp-server-guide',
  },
]

export const skillGroups = [
  {
    name: '言語・フレームワーク',
    items: [
      { name: 'Python / FastAPI', note: 'API約35本、判定サーバー、OCR連携、集計処理' },
      {
        name: 'JavaScript / Vue 3',
        note: '業務システムの画面設計・実装、kintoneカスタマイズ約3,500行',
      },
      { name: 'C# / .NET 8 / WPF', note: 'デスクトップ業務ツール、Windowsアプリ' },
      {
        name: 'Java / SQL / Excel VBA / PowerShell',
        note: '基幹システムの一部開発・保守、自動化、運用スクリプト',
      },
      { name: 'React 19 / Capacitor', note: '個人開発でのモバイル基盤（学習中）' },
    ],
  },
  {
    name: 'データ・インフラ',
    items: [
      { name: 'PostgreSQL / PostGIS', note: '位置情報を扱うテーブル設計、SQLチューニング' },
      { name: 'AWS', note: 'LLM基盤の環境・セキュリティ設計をベンダーと協働' },
      { name: 'GitHub Enterprise', note: '導入とセキュリティ対応、開発環境の整備' },
      {
        name: 'kintone / RPA / AI-OCR / Tableau',
        note: '業務の流れを作るための基盤として日常的に利用',
      },
    ],
  },
  {
    name: 'AI',
    items: [
      {
        name: 'LLM API / ローカルLLM（Ollama）',
        note: '用途に応じて外部LLMと社内完結LLMを使い分ける構成設計',
      },
      {
        name: 'MCPサーバー / AIエージェント',
        note: '大学の研究者のもとで試作・検証（2024 – 2026）。安全な作り方のガイドと参照実装を公開',
      },
      {
        name: 'AIの入出力の安全設計',
        note: '個人情報の検出、AIをだます指示への対策、権限と認定の連動',
      },
      {
        name: 'AIを使った開発',
        note: 'Claude Code・GitHub Copilot・Codexで業務ツールを短期間に実装',
      },
    ],
  },
  {
    name: '進め方',
    items: [
      { name: '要件定義・設計', note: 'ヒアリングから画面・API・DB設計まで一人で通す' },
      {
        name: '経営層への説明・ベンダー調整',
        note: '役員向け資料の作成と報告、外部ベンダーとの設計調整',
      },
      { name: '制度起案・研修', note: 'AI利用ルール、認定制度、評価制度案、新卒研修の講師' },
    ],
  },
]

export const timeline = [
  {
    year: '2018',
    title: '共済団体に営業職として入社',
    text: '現場で1年。独学でExcelマクロと社内ポータルを作り、評価されてシステム部門へ。',
  },
  {
    year: '2019',
    title: 'システム部門へ異動、HAL名古屋に入学',
    text: '働きながら高度情報学科（4年制）へ。社内システムの開発・保守とRPA推進を担当。',
  },
  {
    year: '2020',
    title: 'HAL EVENT WEEK 銅賞',
    text: 'J検 情報システム試験（プログラマ認定）を取得。',
  },
  {
    year: '2021',
    title: '基本情報技術者試験 合格、HAL EVENT WEEK 金賞',
    text: '3校合同コンテスト 銅賞、ビジネスアイデアコンテスト アイデア賞。J検 システムエンジニア認定。',
  },
  {
    year: '2022',
    title: 'RPA検定 合格、Notes → kintone 移行',
    text: '約50アプリを設計・開発。Azureで音声認識・自然言語処理のAI開発にも着手。',
  },
  {
    year: '2023',
    title: 'HAL名古屋 卒業、未来創造展 銅賞',
    text: 'Javaプログラミング能力認定試験2級。RPAの全社ヒアリングを主導。',
  },
  {
    year: '2024',
    title: '新設のDX推進部門の責任者に',
    text: '入社7年目。大学の研究者のもとでAI・データ分析の学習とAIエージェントの試作を開始。',
  },
  {
    year: '2025',
    title: '営業支援システムを一人で内製',
    text: '地図×GPS×AI、約30,000行。ローカルLLM業務ツールの開発。',
  },
  {
    year: '2026',
    title: '情報セキュリティマネジメント試験 合格',
    text: '全職員向け生成AI基盤とAI利用の認定制度を設計。個人開発mopoを開始。公開リポジトリ llm-guard-gateway と secure-mcp-server-guide を作成。',
  },
]

export const certifications = [
  { name: '基本情報技術者試験', year: '2021', org: 'IPA（国家資格）' },
  { name: '情報セキュリティマネジメント試験', year: '2026', org: 'IPA（国家資格）' },
  { name: 'RPA技術者認定 / NEC Software Robot Solution RPA検定', year: '2020 / 2022', org: '' },
  { name: 'Javaプログラミング能力認定試験 2級', year: '2023', org: 'サーティファイ' },
  { name: 'J検 情報システム試験 システムエンジニア認定 / プログラマ認定', year: '2020', org: '' },
  { name: '認定Webアプリケーション脆弱性診断士（SecuriST）', year: '2026 取得予定', org: '' },
  { name: '生成AIパスポート', year: '2026 取得予定', org: '' },
]

export const awards = [
  'HAL EVENT WEEK 2021 金賞',
  'HAL EVENT WEEK 2020 銅賞',
  'HAL 3校合同学内コンテスト 銅賞（2021・2023）',
  '未来創造展 2023 銅賞',
  'ビジネスアイデアコンテスト アイデア賞（NTPシステム株式会社）',
]
