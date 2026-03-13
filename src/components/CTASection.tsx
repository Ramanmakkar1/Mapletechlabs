'use client';

export default function CTASection() {
  return (
    <section id="contact" className="section" style={{
      background:'linear-gradient(135deg, #000 0%, #08323d 100%)',
      position:'relative', overflow:'hidden',
    }}>
      {/* BG orbs */}
      <div style={{ position:'absolute', top:'-20%', right:'-10%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle, rgba(180,253,131,0.1) 0%, transparent 70%)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', bottom:'-20%', left:'-10%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(8,50,61,0.8) 0%, transparent 70%)', pointerEvents:'none' }}/>

      <div className="cb-container" style={{ position:'relative', zIndex:10 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'60px 80px', alignItems:'center' }}>

          {/* Left */}
          <div>
            <p className="section-tag">Ready to Start?</p>
            <h2 style={{ fontSize:'clamp(1.8rem,3.5vw,3rem)', fontWeight:800, color:'#fff', lineHeight:1.15, marginBottom:20 }}>
              Let's Build Something <span style={{ color:'#7c3aed' }}>Amazing Together</span>
            </h2>
            <p style={{ color:'rgba(255,255,255,0.55)', fontSize:15, lineHeight:1.8, marginBottom:36 }}>
              Have a project in mind? Tell us about it and we'll get back to you within 24 hours with a clear path forward.
            </p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:12 }}>
              {['✓ Free Discovery Call','✓ 24h Response','✓ No Commitment Required'].map(item => (
                <span key={item} style={{ color:'rgba(255,255,255,0.6)', fontSize:13, fontWeight:500 }}>{item}</span>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div style={{
            background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)',
            borderRadius:20, padding:36, backdropFilter:'blur(20px)',
          }}>
            <form onSubmit={e=>e.preventDefault()} style={{ display:'flex', flexDirection:'column', gap:16 }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
                <input required type="text" placeholder="Full Name"
                  style={{ padding:'13px 16px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:8, color:'#fff', fontFamily:'Poppins,sans-serif', fontSize:14, outline:'none' }}/>
                <input required type="email" placeholder="Email Address"
                  style={{ padding:'13px 16px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:8, color:'#fff', fontFamily:'Poppins,sans-serif', fontSize:14, outline:'none' }}/>
              </div>
              <input type="text" placeholder="Company (optional)"
                style={{ padding:'13px 16px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:8, color:'#fff', fontFamily:'Poppins,sans-serif', fontSize:14, outline:'none' }}/>
              <select style={{ padding:'13px 16px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:8, color:'rgba(255,255,255,0.6)', fontFamily:'Poppins,sans-serif', fontSize:14, outline:'none', appearance:'none' }}>
                <option value="">Select a Service</option>
                {['Custom Software','Web Development','Mobile App','AI & Automation','Blockchain','Enterprise Software','Other'].map(s=><option key={s} style={{ background:'#1e1e1e' }}>{s}</option>)}
              </select>
              <textarea required rows={4} placeholder="Tell us about your project..."
                style={{ padding:'13px 16px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:8, color:'#fff', fontFamily:'Poppins,sans-serif', fontSize:14, outline:'none', resize:'none' }}/>
              <button type="submit" className="btn-primary btn-lg" style={{ width:'100%', justifyContent:'center' }}>
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
