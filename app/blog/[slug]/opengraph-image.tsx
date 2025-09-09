import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises';
import path from 'path';

// Route segment config
export const runtime = 'nodejs'

// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

const titles: { [key: string]: string } = {
  'first': 'Hello First!',
  'second': 'Hello Second!'
}

export const contentType = 'image/png'

// 폴백 이미지 렌더링을 위한 컴포넌트
function FallbackImage() {
  return (
    <div
      style={{
        background: 'linear-gradient(to right, #4b6cb7, #182848)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <div style={{ fontSize: 60 }}>Develog</div>
    </div>
  );
}

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  
  try {
    const title = titles[params.slug];
    // slug에 해당하는 타이틀이 없으면 에러를 발생시켜 catch 블록으로 이동
    if (!title) {
      throw new Error(`Title for slug "${params.slug}" not found.`);
    }

    // Font
    const dunggeunmoFont = await readFile(
      path.join(process.cwd(), 'app/fonts/DungGeunMo.ttf')
    )

    const backgroundImage = await readFile(
      path.join(process.cwd(), 'public/images/opengraph-image.png')
    )
    const backgroundImageData = `data:image/png;base64,${backgroundImage.toString('base64')}`

    return new ImageResponse(
      (
        // ImageResponse JSX element
        <div
          style={{
            fontSize: 84,
            color: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${backgroundImageData})`,
            backgroundSize: '1200px 630px',
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }} />
          <div style={{ position: 'relative', margin: 25 }}>{title}</div>
          <div style={{ position: 'relative', margin: 25, fontSize: 32 }}>포스팅 글에 대한 설명입니다</div>
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: 'DungGeunMo',
            data: dunggeunmoFont,
            style: 'normal',
            weight: 400,
          },
        ],
      }
    )
  } catch (e) {
    console.error(`Failed to generate OG image for slug "${params.slug}":`, e);
    // 에러 발생 시 폴백 이미지를 반환합니다.
    return new ImageResponse(<FallbackImage />, { ...size });
  }
}