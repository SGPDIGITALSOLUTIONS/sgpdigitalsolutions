import { ImageResponse } from 'next/og';

export const alt = 'SGP Digital Solutions — Less admin. More business.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const runtime = 'edge';

// The Edge renderer avoids the Next 14 Node image renderer's Windows path issue.
export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%',
      background: '#050807', color: '#fff', padding: '58px 70px', justifyContent: 'space-between',
      borderBottom: '12px solid #00ff88' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
        <div style={{ display: 'flex', color: '#00ff88', fontSize: 48, fontWeight: 700 }}>SGP</div>
        <div style={{ display: 'flex', fontSize: 24, letterSpacing: 3 }}>DIGITAL SOLUTIONS</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', fontSize: 88, fontWeight: 700,
        lineHeight: 1.08, letterSpacing: -4 }}>
        <div style={{ display: 'flex' }}>LESS ADMIN.</div>
        <div style={{ display: 'flex', color: '#00ff88' }}>MORE BUSINESS.</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', fontSize: 26, color: '#c1ccc5' }}>Business automation. Websites. Practical digital help.</div>
        <div style={{ display: 'flex', fontSize: 22, color: '#00ff88' }}>sgpdigitalsolutions.co.uk</div>
      </div>
    </div>,
    size,
  );
}
