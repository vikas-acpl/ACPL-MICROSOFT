export const SERVICES_CONFIG = {
    'cloud-security': {
        heroTitle: 'Cloud Security and Firewall',
        heroSubtitle:
            'Secure your cloud workloads with automated threat protection and CSPM across Azure and multicloud.',
        category: 'Cloud Services',
        sections: [
            {
                id: 'microsoft-defender-cloud',
                title: 'Microsoft Defender for Cloud',
                kicker: 'Unified security across the full application lifecycle, from code to runtime.',
                bullets: [
                    {
                        heading: 'Hybrid & Multicloud Protection',
                        points:'Start protecting your environments with unified security visibility.'
                    },
                    {
                        heading: 'Strengthen Security Posture',
                        points:'Help protect cloud workloads from evolving cyberthreats and identify vulnerabilities early.'
                    },
                    {
                        heading: 'Secure Applications',
                        points:'Build more secure applications with integrated DevOps security capabilities.'
                    },
                ],
            },
            {
                id: 'microsoft-defender-cspm',
                title: 'Microsoft Defender CSPM',
                kicker: 'Focus on your most critical risks first, across multicloud environments.',
                bullets: [
                    {
                        heading: 'Contextual Insights',
                        points:'Measure posture with Microsoft Secure Score and gain contextual visibility.'
                    },
                    {
                        heading: 'Attack Path Analysis',
                        points:'Mitigate risks with proactive cyberattack path analysis and code-to-runtime remediation.'
                    },
                    {
                        heading: 'Security Governance',
                        points:'Manage security policies, simplify compliance, and enhance data/AI security posture.'
                    },
                ],
            },
            {
                id: 'microsoft-defender-easm',
                title: 'Microsoft Defender EASM',
                kicker: 'See your business the way an attacker can.',
                bullets: [
                    {
                        heading: 'Discover Weaknesses',
                        points:'Discover, classify, and prioritize exposed weaknesses in the cloud.'
                    },
                    {
                        heading: 'Broad Coverage',
                        points:'Monitor SaaS and IaaS resources to reduce blind spots.'
                    },
                    {
                        heading: 'Strengthen Posture',
                        points:'Identify unmanaged resources and external vulnerabilities to reduce your attack surface.'
                    },
                ],
            },
            {
                id: 'azure-firewall',
                title: 'Azure Firewall',
                kicker: 'Protect your resources with a managed, cloud‑based network security service.',
                bullets: [
                    {
                        heading: 'Managed Network Security',
                        points:'Protect Azure Virtual Network resources with built‑in high availability.'
                    },
                    {
                        heading: 'Unrestricted Scalability',
                        points:'Match changing traffic flows without manual intervention.'
                    },
                    {
                        heading: 'Centralized Policy Management',
                        points:'Create and manage network security policies across subscriptions and virtual networks.'
                    },
                ],
            },
            {
                id: 'azure-waf',
                title: 'Azure Web Application Firewall',
                kicker: 'Gain powerful protection for web apps and APIs.',
                bullets: [
                    {
                        heading: 'OWASP Protection',
                        points:'Protect against the top OWASP risks with managed rulesets.'
                    },
                    {
                        heading: 'Bot & DDoS Defense',
                        points:'Defend against malicious bot and DDoS attacks at the edge and datacenters.'
                    },
                    {
                        heading: 'Custom Rule Sets',
                        points:'Streamline DevOps and increase security posture with custom rules.'
                    },
                ],
            },
            {
                id: 'azure-ddos',
                title: 'Azure DDoS Protection',
                kicker: 'Protect your Azure resources and prevent distributed denial‑of‑service attacks.',
                bullets: [
                    {
                        heading: 'Adaptive Threat Intelligence',
                        points:'Automatically detect and mitigate even complex DDoS attacks.'
                    },
                    {
                        heading: 'Massive Mitigation Capacity',
                        points:'Scrub traffic at the network edge before it impacts applications.'
                    },
                    {
                        heading: 'Full Visibility',
                        points:'Get insights and layered DDoS protection immediately upon enablement.'
                    },
                ],
            },
        ]
    },
    'endpoint-security': {
        heroTitle: 'Endpoint Security & Management',
        heroSubtitle:
            'Unified prevention, detection, and management for every device across your enterprise.',
        sections: [
            {
                id: 'microsoft-defender-for-endpoint',
                title: 'Microsoft Defender for Endpoint',
                kicker: 'Industry-leading, multiplatform detection and response.',
                bullets: [
                    {
                        heading: 'AI-Powered Protection',
                        points:'Stop cyberattacks and protect endpoints at speed and scale with industry-transforming AI that amplifies your security team’s strengths.'
                    },
                    {
                        heading: 'Visibility & Prevention',
                        points:'Minimize vulnerabilities with a clear view of your cyberattack surface along with best practices for cyberthreat prevention.'
                    },
                    {
                        heading: 'Multiplatform & IoT',
                        points:'Help protect your IoT and multiplatform devices with a comprehensive, next-generation antivirus, detection, and response solution.'
                    },
                ],
            },
            {
                id: 'microsoft-defender-for-business',
                title: 'Microsoft Defender for Business',
                kicker: 'Cost-effective, enterprise-grade protection for business.',
                bullets: [
                    {
                        heading: 'Consolidated Security',
                        points:'Save money by consolidating multiple products into one unified security solution optimized for your business.'
                    },
                    {
                        heading: 'Simplified Management',
                        points:'Quickly improve security with easy-to-use management controls, actionable insights, and out-of-the-box policies that streamline onboarding.'
                    },
                    {
                        heading: 'Cross Platform Support',
                        points:'Go beyond traditional antivirus with protection for Windows, macOS, iOS, and Android™ devices.'
                    },
                ],
            },
            {
                id: 'microsoft-intune',
                title: 'Microsoft Intune',
                kicker: 'Unified endpoint management for the flexible workforce.',
                bullets: [
                    {
                        heading: 'Unified Management',
                        points:'Cut costs and complexity by managing cross-platform devices with a unified solution built into Microsoft 365.'
                    },
                    {
                        heading: 'Zero Trust Principles',
                        points:'Apply Zero Trust principles with endpoint management that uses identity-based access and enforces device compliance.'
                    },
                    {
                        heading: 'Automated Provisioning',
                        points:'Simplify device setup with automated provisioning and remote configuration.'
                    },
                    {
                        heading: 'Mobile Application Management (MAM)',
                        points:'Secure corporate apps on personal devices, giving users secure access without full device enrollment.'
                    },
                    {
                        heading: 'Streamline Operations',
                        points:'Streamline policy enforcement, patching, and reporting while monitoring the health and compliance of endpoints.'
                    },
                    {
                        heading: 'Flexible Workforce',
                        points:'Help protect data and adapt to the needs of a flexible workforce across company-owned and personal devices.'
                    },
                    {
                        heading: 'Prompt Updates',
                        points:'Reduce downtime and improve satisfaction by delivering apps and updates promptly.'
                    },
                    {
                        heading: 'AI Optimization',
                        points:'Save time with proven, AI-powered configuration baselines that optimize your environment.'
                    },  
                ],
            },
        ],
    },
    'data-security': {
        heroTitle: 'Data Security & Governance',
        heroSubtitle:
            'Unified visibility, protection, and governance for your data estate, wherever it lives.',
        sections: [
            {
                id: 'microsoft-purview-information-protection',
                title: 'Microsoft Purview Information Protection',
                kicker: 'Understand & protect sensitive data.',
                bullets: [
                    {
                        heading: 'Discover Sensitivity',
                        points:'Understand what data is sensitive and business-critical across your landscape.'
                    },
                    {
                        heading: 'Unified Management',
                        points:'Manage and protect your data seamlessly across your entire environment.'
                    },
                ],
            },
            {
                id: 'microsoft-purview-insider-risk-management',
                title: 'Microsoft Purview Insider Risk Management',
                kicker: 'Identify & mitigate internal risks.',
                bullets: [
                    {
                        heading: 'Quick Identification',
                        points:'Quickly identify potential insider risks before they escalate.'
                    },
                    {
                        heading: 'Integrated Action',
                        points:'Take action on insider risks with an integrated, end-to-end approach.'
                    },
                ],
            },
            {
                id: 'microsoft-purview-data-loss-prevention',
                title: 'Microsoft Purview Data Loss Prevention',
                kicker: 'Unify data detection & control.',
                bullets: [
                    {
                        heading: 'Unified Protection',
                        points:'Unify detection, protection, and control of sensitive data.'
                    },
                    {
                        heading: 'Comprehensive Coverage',
                        points:'Protect data across endpoints, Office 365, OneDrive, SharePoint, Microsoft Teams, and Copilot.'
                    },
                ],
            },
            {
                id: 'microsoft-purview-data-governance',
                title: 'Microsoft Purview Data Governance',
                kicker: 'Maximize the value of your data.',
                bullets: [
                    {
                        heading: 'Govern with Confidence',
                        points:'Manage, understand, and govern your data estate with confidence.'
                    },
                    {
                        heading: 'AI-Powered Value',
                        points:'Maximize the value of your data estate with an AI-powered, business-friendly, and unified approach.'
                    },
                ],
            },
        ]
    },
    'zero-trust': {
        heroTitle: 'Zero Trust & Identity',
        heroSubtitle:
            'Secure access to everything, for everyone, from anywhere. Establish the foundation of your Zero Trust architecture with Microsoft Entra.',
        sections: [
            {
                id: 'microsoft-entra-id',
                title: 'Microsoft Entra ID',
                kicker: 'Prevent identity attacks and secure access.',
                bullets: [
                    {
                        heading: 'Strong Authentication',
                        points:'Prevent attacks with risk-based conditional access policies that integrate with security solutions and Zero Trust.'
                    },
                    {
                        heading: 'Seamless Experience',
                        points:'Deliver fast sign-in with SSO, passwordless authentication, and self-service portals.'
                    },
                    {
                        heading: 'Security Copilot',
                        points:'Empower teams with natural language prompts to investigate risky users, track access, and identify policy gaps.'
                    },
                ],
            },
            {
                id: 'microsoft-entra-external-id',
                title: 'Microsoft Entra External ID',
                kicker: 'Secure customer and business collaborator access.',
                bullets: [
                    {
                        heading: 'Granular Policies',
                        points:'Protect external identities with strong authentication and govern identity lifecycles.'
                    },
                    {
                        heading: 'Custom Experiences',
                        points:'Design easy, intuitive sign-up and sign-in experiences for end users.'
                    },
                    {
                        heading: 'Developer Friendly',
                        points:'Easily embed identity security into any app or customer experience.'
                    },
                ],
            },
            {
                id: 'microsoft-entra-id-governance',
                title: 'Microsoft Entra ID Governance',
                kicker: 'Right access, right people, right time.',
                bullets: [
                    {
                        heading: 'Automated Access',
                        points:'Automate employee, supplier, and partner access without the burden of manual approvals.'
                    },
                    {
                        heading: 'Smart Decisions',
                        points:'Make smart access decisions based on machine learning and reduce risk from access abuse.'
                    },
                    {
                        heading: 'Hybrid Support',
                        points:'Streamline deployment for both cloud and on-premises apps, integrating non-Microsoft apps with ease.'
                    },
                ],
            },
            {
                id: 'microsoft-entra-id-protection',
                title: 'Microsoft Entra ID Protection',
                kicker: 'Block identity takeover in real time.',
                bullets: [
                    {
                        heading: 'Prevent Compromise',
                        points:'Extend risk-based adaptive access policies to help protect against malicious actors.'
                    },
                    {
                        heading: 'Safeguard Credentials',
                        points:'Protect against credential theft with high-assurance authentication methods.'
                    },
                    {
                        heading: 'Deep Insights',
                        points:'Export intelligence to any SIEM/XDR tool to deepen insights into identity security posture.'
                    },
                ],
            },
            {
                id: 'microsoft-entra-internet-access',
                title: 'Microsoft Entra Internet Access',
                kicker: 'Identity-centric secure web gateway (SWG).',
                bullets: [
                    {
                        heading: 'Converged Defenses',
                        points:'Strengthen Zero Trust by converging conditional access and network security controls.'
                    },
                    {
                        heading: 'Threat Protection',
                        points:'Protect against malicious internet traffic with web content filtering and TLS inspection.'
                    },
                    {
                        heading: 'Global Scale',
                        points:'Optimize traffic routing to internet destinations, including Microsoft 365, via a globally distributed edge.'
                    },
                ],
            },
            {
                id: 'microsoft-entra-private-access',
                title: 'Microsoft Entra Private Access',
                kicker: 'Identity-centric Zero Trust Network Access (ZTNA).',
                bullets: [
                    {
                        heading: 'Replace Legacy VPN',
                        points:'Enable Zero Trust access to all legacy, custom, and modern private apps from anywhere.'
                    },
                    {
                        heading: 'Adaptive Controls',
                        points:'Enforce MFA and adaptive least-privilege access policies without changing your apps.'
                    },
                    {
                        heading: 'Universal SSO',
                        points:'Enable Single Sign-On across all private apps, whether on-premises or in the cloud.'
                    },
                ],
            },
        ]
    },
    'siem-xdr': {
        heroTitle: 'SIEM & XDR',
        heroSubtitle:
            'Unified visibility, investigation, and response across the entire cyberattack chain.',
        sections: [
            {
                id: 'microsoft-sentinel',
                title: 'Microsoft Sentinel',
                kicker: 'AI-ready SIEM & unified data lake.',
                bullets: [
                    {
                        heading: 'AI-Ready Platform',
                        points:'Secure your multicloud, multiplatform environment with an industry-leading SIEM.'
                    },
                    {
                        heading: 'Unified Data Lake',
                        points:'Centralize security data with enriched graph-powered visibility.'
                    },
                    {
                        heading: 'Intelligent Reasoning',
                        points:'Utilize a collection of intelligent reasoning tools for faster threat detection.'
                    },
                ],
            },
            {
                id: 'microsoft-defender-for-cloud',
                title: 'Microsoft Defender for Cloud',
                kicker: 'Unified security from code to runtime.',
                bullets: [
                    {
                        heading: 'End-to-End Visibility',
                        points:'Gain visibility across your hybrid and multicloud environments and prioritize critical risks.'
                    },
                    {
                        heading: 'DevOps Security',
                        points:'Streamline collaboration between development and security teams to fix issues at the source.'
                    },
                    {
                        heading: 'Multicloud Protection',
                        points:'Get intelligent threat detection integrated into the Microsoft Defender portal.'
                    },
                ],
            },
            {
                id: 'microsoft-defender-xdr',
                title: 'Microsoft Defender XDR',
                kicker: 'Unified visibility across the cyberattack chain.',
                bullets: [
                    {
                        heading: 'Endpoints',
                        points:'Discover and secure endpoint and network devices across your multiplatform enterprise.'
                    },
                    {
                        heading: 'Identities',
                        points:'Manage and secure hybrid identities and simplify access for employees and partners.'
                    },
                    {
                        heading: 'SaaS Apps & Email',
                        points:'Gain visibility into cloud apps and protect collaboration tools from advanced threats.'
                    },
                ],
            },
            {
                id: 'microsoft-defender-for-Office-365',
                title: 'Microsoft Defender for Office 365',
                kicker: 'Safeguard email and collaboration tools.',
                bullets: [
                    {
                        heading: 'Phishing Protection',
                        points:'Safeguard your email and collaboration tools from phishing attacks.'
                    },
                    {
                        heading: 'Disrupt Advanced Threats',
                        points:'Stop sophisticated attacks such as business email compromise (BEC).'
                    },
                ],
            },
            {
                id: 'microsoft-defender-for-identity',
                title: 'Microsoft Defender for Identity',
                kicker: 'Advanced identity threat detection.',
                bullets: [
                    {
                        heading: 'Detect & Respond',
                        points:'Identify advanced identity cyberthreats across your organization.'
                    },
                    {
                        heading: 'Identity Posture',
                        points:'Gain insights into identity risks and malicious activities.'
                    },
                ],
            },
            {
                id: 'microsoft-defender-for-cloud-apps',
                title: 'Microsoft Defender for Cloud Apps',
                kicker: 'Secure apps and generative AI systems.',
                bullets: [
                    {
                        heading: 'SaaS Security',
                        points:'Modernize how you secure apps and defend against SaaS-based attacks.'
                    },
                    {
                        heading: 'GenAI Protection',
                        points:'Elevate your security posture for generative AI systems and cloud services.'
                    },
                ],
            },
            {
                id: 'microsoft-defender-vulnerability-management',
                title: 'Microsoft Defender Vulnerability Management',
                kicker: 'Microsoft Defender Vulnerability Management.',
                bullets: [
                    {
                        heading: 'Reduce Threats',
                        points:'Reduce cybersecurity threats with a risk-based approach.'
                    },
                    {
                        heading: 'Vulnerability Insight',
                        points:'Identify and remediate vulnerabilities across your environment.'
                    },
                ],
            },
            {
                id: 'microsoft-security-exposure-management',
                title: 'Microsoft Security Exposure Management',
                kicker: 'Visibility into attack surface.',
                bullets: [
                    {
                        heading: 'Optimize Posture',
                        points:'Reduce risk and optimize your security posture with comprehensive visibility.'
                    },
                    {
                        heading: 'Attack Surface View',
                        points:'Gain insight into your exposure to cyberthreats and attack surface.'
                    },
                ],
            },
            {
                id: 'microsoft-defender-threat-intelligence',
                title: 'Microsoft Defender Threat Intelligence',
                kicker: 'Unmask and neutralize adversaries.',
                bullets: [
                    {
                        heading: 'Neutralize Threats',
                        points:'Unmask and neutralize modern adversaries and cyberthreats such as ransomware.'
                    },
                    {
                        heading: 'Threat Context',
                        points:'Gain deep context into threat actors and their tactics.'
                    },
                ],
            },
        ]
    },
    compliance: {
        heroTitle: 'Compliance Management',
        heroSubtitle:
            'Simplify regulatory adherence, reduce risk, and manage your data lifecycle with intelligent solutions.',
        sections: [
            {
                id: 'microsoft-purview-compliance-manager',
                title: 'Microsoft Purview Compliance Manager',
                kicker: 'Simplify compliance and reduce risk.',
                bullets: [
                    {
                        heading: 'Intuitive management',
                        points:'Get end-to-end capabilities: easy onboarding, workflow management, control implementation, and evidence cataloging.'
                    },
                    {
                        heading: 'Scalable assessments',
                        points:'Use ready-to-use, customizable, and multicloud regulatory assessment templates to meet your business needs.'
                    },
                    {
                        heading: 'Built-in capabilities',
                        points:'Reduce risks with compliance scores, control mapping, versioning, and continuous assessments.'
                    },
                ],
            },
            {
                id: 'microsoft-purview-data-lifecycle-management',
                title: 'Microsoft Purview Data Lifecycle Management',
                kicker: 'Manage information lifecycle intelligently.',
                bullets: [
                    {
                        heading: 'Built-in governance',
                        points:'Efficiently classify, retain, review, dispose, and manage content in Microsoft 365.'
                    },
                    {
                        heading: 'Intelligent capabilities',
                        points:'Use machine learning to classify content and automatically apply appropriate policies.'
                    },
                    {
                        heading: 'Defensible policies',
                        points:'Get disposition reviews, proof of disposal, and documented audit trails.'
                    },
                ],
            },
            {
                id: 'microsoft-purview-ediscovery',
                title: 'Microsoft Purview eDiscovery',
                kicker: 'Efficient response to legal matters.',
                bullets: [
                    {
                        heading: 'Identify',
                        points:'Identify and collect data across your organization.'
                    },
                    {
                        heading: 'Reduce',
                        points:'Reduce data volume with advanced culling.'
                    },
                    {
                        heading: 'Manage',
                        points:'Manage legal holds and export data securely.'
                    },  
                ],
            },
            {
                id: 'microsoft-purview-audit',
                title: 'Microsoft Purview Audit',
                kicker: 'Power forensic and compliance investigations.',
                bullets: [
                    {
                        heading: 'Support investigations',
                        points:'Determine the scope of compromise and access audit logs to support forensic analysis.'
                    },
                    {
                        heading: 'Preserve audit logs',
                        points:'Retain records for one year (with options up to 10 years) to meet regulatory requirements.'
                    },
                    {
                        heading: 'High-bandwidth access',
                        points:'Get a dynamic bandwidth quota to access your auditing data quickly.'
                    },  
                ],
            },
        ]
    },
}
