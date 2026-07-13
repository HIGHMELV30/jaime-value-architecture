"use client";

import { FormEvent, useState } from "react";

const services = [
  {
    number: "01",
    title: "Business Intelligence",
    summary: "Decision-ready Power BI dashboards built from Excel, cloud platforms, and operational data.",
    capabilities: ["Power BI", "Excel modernization", "Data modeling"],
  },
  {
    number: "02",
    title: "Workflow Automation",
    summary: "Power Automate workflows that reduce repetitive work, route approvals, and improve response time.",
    capabilities: ["Approvals", "Alerts", "Task routing"],
  },
  {
    number: "03",
    title: "Business Applications",
    summary: "Focused Power Apps experiences for data entry, case management, inspections, and internal operations.",
    capabilities: ["Power Apps", "Dataverse", "User experience"],
  },
  {
    number: "04",
    title: "Applied AI",
    summary: "Human-reviewed AI summaries, knowledge assistants, and decision-support workflows grounded in business context.",
    capabilities: ["Copilot", "AI agents", "Governance"],
  },
];

const layers = [
  ["01", "Excel and connected data", "Capture structured facts from current operations."],
  ["02", "Power BI", "Model performance and expose actionable patterns."],
  ["03", "Power Automate", "Trigger alerts, approvals, records, and assignments."],
  ["04", "Power Apps", "Give users a controlled interface for the process."],
  ["05", "AI and Copilot", "Summarize context and assist decisions with human oversight."],
];

const delivery = [
  ["01", "Discover", "Define the operational problem, users, data sources, risks, and measurable outcome."],
  ["02", "Design", "Map the architecture, user journey, access rules, dashboards, and automation logic."],
  ["03", "Build", "Develop the solution in controlled increments with documented review points."],
  ["04", "Validate", "Test calculations, permissions, accessibility, mobile behavior, and failure conditions."],
  ["05", "Launch", "Deploy, document, train users, monitor adoption, and plan the next improvement cycle."],
];

const navigation = [
  ["Overview", "bsv-overview"],
  ["Services", "bsv-services"],
  ["Architecture", "bsv-architecture"],
  ["Process", "bsv-process"],
  ["Engagement", "bsv-engagement"],
];

export default function BusinessSystemsValueArchitecture() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const submitRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <article className="bsv-shell">
      <style>{styles}</style>

      <header className="bsv-header" aria-label="Business Systems Value Architecture navigation">
        <button className="bsv-brand" onClick={() => jump("bsv-overview")} aria-label="Return to overview">
          <span className="bsv-mark">VA</span>
          <span><strong>Value Architecture</strong><small>DATA · AUTOMATION · AI</small></span>
        </button>

        <nav className="bsv-nav" aria-label="Analysis sections">
          {navigation.map(([label, id]) => <button key={id} onClick={() => jump(id)}>{label}</button>)}
        </nav>

        <div className="bsv-header-actions">
          <button className="bsv-link-button" onClick={() => setPortalOpen(true)}>Client portal</button>
          <button className="bsv-primary-small" onClick={() => jump("bsv-engagement")}>Request consultation</button>
        </div>

        <button className="bsv-menu" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen}>Menu</button>
        {menuOpen && <div className="bsv-mobile-nav">{navigation.map(([label,id]) => <button key={id} onClick={() => jump(id)}>{label}</button>)}</div>}
      </header>

      <section id="bsv-overview" className="bsv-hero">
        <div className="bsv-hero-copy">
          <span className="bsv-eyebrow">BUSINESS SYSTEMS ENGINEERED FOR MEASURABLE WORK</span>
          <h1>Turn disconnected work into an <em>intelligent operating system.</em></h1>
          <p>We design data, automation, application, and AI solutions that help organizations see clearly, respond faster, and operate with control.</p>
          <div className="bsv-hero-actions">
            <button className="bsv-primary" onClick={() => jump("bsv-engagement")}>Discuss your project <span>→</span></button>
            <button className="bsv-secondary" onClick={() => jump("bsv-architecture")}>Explore the architecture</button>
          </div>
          <div className="bsv-trust"><span>✓ Outcome-led</span><span>✓ Security-aware</span><span>✓ Built for adoption</span></div>
        </div>

        <div className="bsv-dashboard" aria-label="Illustrative operations dashboard">
          <div className="bsv-dashboard-top"><div><small>Operations intelligence</small><h2>Performance overview</h2></div><span className="bsv-live">● Live</span></div>
          <div className="bsv-metrics">
            <Metric label="Cases resolved" value="1,284" change="+18%" />
            <Metric label="Cycle time" value="4.2h" change="−31%" />
            <Metric label="Automation" value="68%" change="+12%" />
          </div>
          <div className="bsv-chart"><div className="bsv-chart-title"><span>Weekly throughput</span><b>Target exceeded</b></div><div className="bsv-bars">{[38,56,45,68,62,81,92,76,96,88,100,94].map((height,index)=><i key={index} style={{height:`${height}%`}} />)}</div></div>
          <div className="bsv-ai"><span className="bsv-ai-icon">AI</span><p><strong>Operations summary</strong>Throughput improved after approval routing was automated. Two exceptions require owner review.</p></div>
          <p className="bsv-caption">Illustrative interface. Metrics are representative, not client results.</p>
        </div>
      </section>

      <section id="bsv-services" className="bsv-section bsv-section-muted">
        <SectionHeading kicker="SERVICES" title="From raw information to controlled execution" text="Modular services that solve an immediate operational problem or combine into a connected business system." />
        <div className="bsv-service-grid">{services.map(service => <article className="bsv-service" key={service.title}><span>{service.number}</span><h3>{service.title}</h3><p>{service.summary}</p><div>{service.capabilities.map(item=><small key={item}>{item}</small>)}</div></article>)}</div>
      </section>

      <section id="bsv-architecture" className="bsv-section bsv-architecture">
        <div className="bsv-architecture-copy">
          <span className="bsv-kicker">CONNECTED SOLUTION</span>
          <h2>One flow. Five layers of value.</h2>
          <p>Each layer performs a distinct role. Together, they create a system people can use, leaders can trust, and teams can improve.</p>
          <div className="bsv-checks"><span>✓ Executive and operational dashboards</span><span>✓ Excel and CSV modernization</span><span>✓ Automated alerts and approvals</span><span>✓ Internal applications and portals</span><span>✓ AI-assisted knowledge access</span><span>✓ Governance and documentation</span></div>
        </div>
        <div className="bsv-layers">{layers.map(([number,title,text])=><div key={number}><span>{number}</span><p><strong>{title}</strong><small>{text}</small></p><b>→</b></div>)}</div>
      </section>

      <section id="bsv-process" className="bsv-section bsv-section-muted">
        <SectionHeading kicker="DELIVERY PROCESS" title="Controlled enough to manage risk. Flexible enough to move." text="Every engagement follows a transparent path from problem definition to adoption." />
        <div className="bsv-process-grid">{delivery.map(([number,title,text])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="bsv-section">
        <div className="bsv-result-card">
          <div><span className="bsv-kicker">REPRESENTATIVE ENGAGEMENT</span><h2>From spreadsheet tracking to operational control</h2><p>A service organization needs faster visibility into exceptions, ownership, and completion status. The solution connects existing records to dashboards, workflows, and a controlled user interface.</p><small>Illustrative scenario; outcomes depend on the organization, data, scope, and implementation.</small></div>
          <div className="bsv-outcomes">{[["Visibility","One trusted operational view"],["Response","Alerts routed to accountable owners"],["Control","Documented status and access rules"],["Scale","Reusable components and governed data"]].map(([title,text])=><div key={title}><strong>{title}</strong><span>{text}</span></div>)}</div>
        </div>
      </section>

      <section id="bsv-engagement" className="bsv-section bsv-section-muted bsv-contact">
        <div><span className="bsv-kicker">START A CONVERSATION</span><h2>Bring one costly operational problem.</h2><p>Describe the process, the people affected, the current tools, and the measurable result your organization needs.</p><small>Do not submit passwords, payment information, or confidential business records.</small></div>
        <div className="bsv-form-card">
          {submitted ? <div className="bsv-success"><span>✓</span><h3>Request prepared</h3><p>This interface is ready to connect to an approved email, CRM, or Power Automate workflow.</p><button onClick={()=>setSubmitted(false)}>Return to form</button></div> :
          <form onSubmit={submitRequest}>
            <label><span>Name</span><input required name="name" autoComplete="name" /></label>
            <label><span>Work email</span><input required name="email" type="email" autoComplete="email" /></label>
            <label><span>Company</span><input required name="company" autoComplete="organization" /></label>
            <label><span>Primary need</span><select required name="need" defaultValue=""><option value="" disabled>Select a service</option><option>Business intelligence</option><option>Workflow automation</option><option>Business application</option><option>Applied AI</option><option>Connected solution</option></select></label>
            <label className="bsv-full"><span>What needs to improve?</span><textarea required name="message" rows={5} placeholder="Describe the current process and desired result." /></label>
            <button className="bsv-primary bsv-full" type="submit">Submit project request →</button>
          </form>}
        </div>
      </section>

      {portalOpen && <div className="bsv-modal-backdrop" role="presentation" onMouseDown={()=>setPortalOpen(false)}><div className="bsv-modal" role="dialog" aria-modal="true" aria-labelledby="bsv-portal-title" onMouseDown={(event)=>event.stopPropagation()}><button className="bsv-close" onClick={()=>setPortalOpen(false)} aria-label="Close">×</button><span className="bsv-mark">VA</span><h2 id="bsv-portal-title">Client portal</h2><p>Secure authentication must be connected before production deployment.</p><label><span>Work email</span><input type="email" /></label><label><span>Password</span><input type="password" /></label><button className="bsv-primary">Sign in</button><small>Demonstration only. Credentials are not collected.</small></div></div>}
    </article>
  );
}

function Metric({label,value,change}:{label:string;value:string;change:string}) {
  return <div className="bsv-metric"><small>{label}</small><strong>{value}</strong><span>{change}</span></div>;
}

function SectionHeading({kicker,title,text}:{kicker:string;title:string;text:string}) {
  return <div className="bsv-heading"><span className="bsv-kicker">{kicker}</span><h2>{title}</h2><p>{text}</p></div>;
}

const styles = `
.bsv-shell{--bg:#07111f;--panel:#0c192a;--panel2:#0f2035;--line:rgba(255,255,255,.1);--muted:#9aa9bd;--cyan:#67e8f9;--blue:#2563eb;background:var(--bg);color:#f8fafc;min-height:100vh;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.5}.bsv-shell *{box-sizing:border-box}.bsv-shell button,.bsv-shell input,.bsv-shell select,.bsv-shell textarea{font:inherit}.bsv-header{position:sticky;top:0;z-index:40;min-height:76px;display:flex;align-items:center;gap:24px;padding:14px max(24px,calc((100vw - 1200px)/2));border-bottom:1px solid var(--line);background:rgba(7,17,31,.94);backdrop-filter:blur(18px)}.bsv-brand{display:flex;align-items:center;gap:12px;border:0;background:none;color:white;text-align:left;cursor:pointer}.bsv-brand strong,.bsv-brand small{display:block}.bsv-brand small{color:var(--muted);font-size:10px;letter-spacing:.16em}.bsv-mark{display:grid;place-items:center;width:42px;height:42px;border-radius:13px;background:linear-gradient(135deg,var(--cyan),#3b82f6);color:#06101c;font-weight:900;box-shadow:0 10px 30px rgba(34,211,238,.18)}.bsv-nav{display:flex;gap:22px;margin-left:auto}.bsv-nav button,.bsv-link-button{border:0;background:none;color:#c4cfdd;cursor:pointer}.bsv-nav button:hover,.bsv-link-button:hover{color:var(--cyan)}.bsv-header-actions{display:flex;align-items:center;gap:10px}.bsv-primary-small,.bsv-primary{border:0;border-radius:12px;background:var(--cyan);color:#06101c;font-weight:800;cursor:pointer}.bsv-primary-small{padding:11px 16px}.bsv-primary{padding:14px 21px}.bsv-primary:hover,.bsv-primary-small:hover{background:#a5f3fc}.bsv-menu{display:none;margin-left:auto;border:1px solid var(--line);border-radius:10px;background:transparent;color:white;padding:9px 12px}.bsv-mobile-nav{position:absolute;left:0;right:0;top:76px;padding:12px 24px 20px;background:var(--bg);border-bottom:1px solid var(--line)}.bsv-mobile-nav button{display:block;width:100%;padding:12px;border:0;border-radius:10px;background:none;color:white;text-align:left}.bsv-mobile-nav button:hover{background:rgba(255,255,255,.05)}.bsv-hero,.bsv-section{max-width:1200px;margin:auto;padding:92px 24px;scroll-margin-top:76px}.bsv-hero{display:grid;grid-template-columns:1.04fr .96fr;gap:64px;align-items:center;max-width:none;padding-left:max(24px,calc((100vw - 1200px)/2));padding-right:max(24px,calc((100vw - 1200px)/2));background:radial-gradient(circle at 78% 20%,rgba(34,211,238,.13),transparent 26%),radial-gradient(circle at 15% 75%,rgba(37,99,235,.13),transparent 25%)}.bsv-eyebrow,.bsv-kicker{color:var(--cyan);font-size:12px;font-weight:800;letter-spacing:.16em}.bsv-eyebrow{display:inline-block;padding:7px 12px;border:1px solid rgba(103,232,249,.24);border-radius:999px;background:rgba(103,232,249,.08)}.bsv-hero h1{max-width:700px;margin:24px 0 0;font-size:clamp(44px,5.4vw,78px);line-height:1.02;letter-spacing:-.055em}.bsv-hero h1 em{color:var(--cyan);font-style:normal}.bsv-hero-copy>p{max-width:650px;margin:25px 0 0;color:#c5d0de;font-size:18px;line-height:1.75}.bsv-hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:31px}.bsv-secondary{padding:13px 20px;border:1px solid var(--line);border-radius:12px;background:rgba(255,255,255,.04);color:white;font-weight:700;cursor:pointer}.bsv-secondary:hover{background:rgba(255,255,255,.08)}.bsv-trust{display:flex;flex-wrap:wrap;gap:24px;margin-top:28px;color:var(--muted);font-size:13px}.bsv-trust span::first-letter{color:var(--cyan)}.bsv-dashboard{padding:24px;border:1px solid var(--line);border-radius:30px;background:linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.025));box-shadow:0 35px 80px rgba(0,0,0,.32)}.bsv-dashboard-top{display:flex;align-items:center;justify-content:space-between}.bsv-dashboard-top small{color:var(--muted)}.bsv-dashboard-top h2{margin:4px 0 0;font-size:20px}.bsv-live{padding:6px 10px;border-radius:999px;background:rgba(52,211,153,.1);color:#6ee7b7;font-size:12px}.bsv-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:24px}.bsv-metric{padding:14px;border-radius:14px;background:rgba(255,255,255,.045)}.bsv-metric small,.bsv-metric strong,.bsv-metric span{display:block}.bsv-metric small{color:var(--muted);font-size:10px;text-transform:uppercase}.bsv-metric strong{margin-top:7px;font-size:20px}.bsv-metric span{margin-top:4px;color:var(--cyan);font-size:11px}.bsv-chart{margin-top:16px;padding:18px;border-radius:18px;background:rgba(255,255,255,.035)}.bsv-chart-title{display:flex;justify-content:space-between;font-size:12px}.bsv-chart-title b{color:var(--cyan)}.bsv-bars{height:142px;display:flex;align-items:flex-end;gap:7px;margin-top:20px}.bsv-bars i{flex:1;min-width:4px;border-radius:5px 5px 0 0;background:linear-gradient(#67e8f9,#2563eb)}.bsv-ai{display:flex;gap:12px;margin-top:14px;padding:14px;border:1px solid rgba(103,232,249,.18);border-radius:16px;background:rgba(103,232,249,.07)}.bsv-ai-icon{display:grid;place-items:center;width:36px;height:36px;flex:0 0 36px;border-radius:10px;background:rgba(103,232,249,.13);color:var(--cyan);font-size:12px;font-weight:900}.bsv-ai p{margin:0;color:#adbacb;font-size:12px}.bsv-ai strong{display:block;margin-bottom:3px;color:white}.bsv-caption{margin:12px 0 0;color:#718096;font-size:10px;text-align:center}.bsv-section-muted{max-width:none;padding-left:max(24px,calc((100vw - 1200px)/2));padding-right:max(24px,calc((100vw - 1200px)/2));border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:rgba(255,255,255,.025)}.bsv-heading{max-width:720px;margin:auto;text-align:center}.bsv-heading h2,.bsv-architecture h2,.bsv-result-card h2,.bsv-contact h2{margin:12px 0 0;font-size:clamp(30px,4vw,45px);line-height:1.12;letter-spacing:-.035em}.bsv-heading p,.bsv-architecture-copy>p,.bsv-result-card p,.bsv-contact>div>p{color:var(--muted);line-height:1.75}.bsv-service-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:44px}.bsv-service{padding:24px;border:1px solid var(--line);border-radius:22px;background:var(--panel);transition:.2s}.bsv-service:hover{transform:translateY(-4px);border-color:rgba(103,232,249,.3)}.bsv-service>span{color:var(--cyan);font-size:12px}.bsv-service h3{margin:18px 0 0;font-size:20px}.bsv-service p{min-height:110px;color:var(--muted);font-size:14px;line-height:1.7}.bsv-service div{display:flex;flex-wrap:wrap;gap:6px}.bsv-service small{padding:5px 8px;border:1px solid var(--line);border-radius:999px;color:#9eacbd}.bsv-architecture{display:grid;grid-template-columns:.9fr 1.1fr;gap:68px;align-items:center}.bsv-checks{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:28px}.bsv-checks span{padding:12px;border:1px solid var(--line);border-radius:12px;background:rgba(255,255,255,.025);color:#c3cfdd;font-size:13px}.bsv-layers{display:grid;gap:10px}.bsv-layers>div{display:flex;align-items:center;gap:15px;padding:15px;border:1px solid var(--line);border-radius:16px;background:var(--panel)}.bsv-layers>div>span{display:grid;place-items:center;width:44px;height:44px;border-radius:12px;background:rgba(103,232,249,.08);color:var(--cyan);font-size:12px;font-weight:800}.bsv-layers p{flex:1;margin:0}.bsv-layers strong,.bsv-layers small{display:block}.bsv-layers small{margin-top:3px;color:var(--muted)}.bsv-layers b{color:#39506b}.bsv-process-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:13px;margin-top:44px}.bsv-process-grid article{padding:21px;border:1px solid var(--line);border-radius:18px;background:rgba(255,255,255,.03)}.bsv-process-grid span{color:var(--cyan);font-size:12px;font-weight:800}.bsv-process-grid h3{margin:16px 0 0}.bsv-process-grid p{color:var(--muted);font-size:13px;line-height:1.65}.bsv-result-card{display:grid;grid-template-columns:.85fr 1.15fr;overflow:hidden;border:1px solid var(--line);border-radius:28px;background:linear-gradient(135deg,rgba(37,99,235,.18),rgba(103,232,249,.04))}.bsv-result-card>div:first-child{padding:42px}.bsv-result-card small{display:block;margin-top:24px;color:#748398}.bsv-outcomes{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--line)}.bsv-outcomes div{padding:34px;background:var(--panel)}.bsv-outcomes strong,.bsv-outcomes span{display:block}.bsv-outcomes strong{color:var(--cyan);font-size:20px}.bsv-outcomes span{margin-top:9px;color:var(--muted);font-size:13px}.bsv-contact{display:grid;grid-template-columns:.8fr 1.2fr;gap:60px;align-items:start}.bsv-contact>div>small{display:block;margin-top:24px;color:#748398}.bsv-form-card{padding:28px;border:1px solid var(--line);border-radius:24px;background:var(--panel)}.bsv-form-card form{display:grid;grid-template-columns:1fr 1fr;gap:16px}.bsv-form-card label,.bsv-modal label{display:block}.bsv-form-card label>span,.bsv-modal label>span{display:block;margin-bottom:7px;color:#c2cedc;font-size:13px}.bsv-form-card input,.bsv-form-card select,.bsv-form-card textarea,.bsv-modal input{width:100%;padding:12px 13px;border:1px solid var(--line);border-radius:11px;background:rgba(255,255,255,.045);color:white;outline:none}.bsv-form-card input:focus,.bsv-form-card select:focus,.bsv-form-card textarea:focus,.bsv-modal input:focus{border-color:var(--cyan)}.bsv-form-card select option{color:#111827}.bsv-full{grid-column:1/-1}.bsv-success{min-height:300px;display:grid;place-content:center;text-align:center}.bsv-success>span{color:#6ee7b7;font-size:40px}.bsv-success h3{margin:10px 0 0;font-size:24px}.bsv-success p{max-width:440px;color:var(--muted)}.bsv-success button{border:0;background:none;color:var(--cyan);cursor:pointer}.bsv-modal-backdrop{position:fixed;inset:0;z-index:100;display:grid;place-items:center;padding:20px;background:rgba(2,6,23,.84);backdrop-filter:blur(8px)}.bsv-modal{position:relative;width:min(440px,100%);padding:30px;border:1px solid var(--line);border-radius:24px;background:var(--panel);box-shadow:0 30px 90px rgba(0,0,0,.5)}.bsv-modal h2{margin:20px 0 0}.bsv-modal p{color:var(--muted)}.bsv-modal label{margin-top:15px}.bsv-modal .bsv-primary{width:100%;margin-top:18px}.bsv-modal>small{display:block;margin-top:12px;color:#748398;text-align:center}.bsv-close{position:absolute;right:15px;top:12px;border:0;background:none;color:#aab7c6;font-size:25px;cursor:pointer}
@media(max-width:980px){.bsv-nav,.bsv-header-actions{display:none}.bsv-menu{display:block}.bsv-hero,.bsv-architecture,.bsv-contact{grid-template-columns:1fr}.bsv-service-grid{grid-template-columns:1fr 1fr}.bsv-process-grid{grid-template-columns:1fr 1fr}.bsv-result-card{grid-template-columns:1fr}.bsv-hero{padding-top:65px}.bsv-dashboard{max-width:700px}.bsv-architecture{gap:38px}}
@media(max-width:640px){.bsv-hero,.bsv-section{padding-top:64px;padding-bottom:64px}.bsv-hero h1{font-size:43px}.bsv-service-grid,.bsv-process-grid,.bsv-checks,.bsv-outcomes,.bsv-form-card form{grid-template-columns:1fr}.bsv-full{grid-column:auto}.bsv-metrics{gap:6px}.bsv-metric{padding:10px}.bsv-metric strong{font-size:17px}.bsv-result-card>div:first-child,.bsv-outcomes div{padding:26px}.bsv-trust{gap:10px 18px}}
`;
