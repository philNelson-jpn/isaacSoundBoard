import React from 'react'
import { styled } from 'styled-components'
import AudioPlayer from 'react-audio-player'

function App() {
	const imageArray = [
		{
			id: crypto.randomUUID(),
			source: '/images/BeltSwing.jpeg',
			alt: 'isaac swinging a belt',
			audioFile: '/sounds/broughtToYouBy.mp3',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/broughtToYouBy.jpeg',
			alt: 'startled isaac with mustache and HIM hat',
			audioFile: '/sounds/notRecommended.mp3',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/chamboFremb.jpeg',
			alt: 'half naked viking isaac',
			audioFile: '/sounds/noLongerAtTheBar.mp3',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/christmasisaac.jpeg',
			alt: 'isaac with santa hat and dog',
			audioFile: '/sounds/OuchAudio.mp4',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/devilsTesticle.jpeg',
			alt: 'beared isaac peering into your soul',
			audioFile: '/sounds/diviningRod.mp3',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/haveYouSeenMyBicycle.jpeg',
			alt: 'isaac on a buffalo',
			audioFile: '/sounds/GlassPitAudio.mp4',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/noLongerAtTheBar.jpeg',
			alt: 'neckless flannel shirt isaac',
			audioFile: '/sounds/jingleMyBells.mp3',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/notRecommended.jpeg',
			alt: 'ddr screaming isaac',
			audioFile: '/sounds/devilsTesticle.mp3',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/theManWithManyHats.jpeg',
			alt: 'isaac with many hats',
			audioFile: '/sounds/chamboFrembNew.mp3',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/teefs.jpeg',
			alt: 'toothless isaac',
			audioFile: '/sounds/thisAsshole.mp3',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/IsaacBirdman.png',
			alt: 'toothless isaac',
			audioFile: '/sounds/BirdmanAudio.mp4',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/IsaacCondom.png',
			alt: 'toothless isaac',
			audioFile: '/sounds/CondomAudio.mp4',
		},
	]

	const [selectedAudio, setSelectedAudio] = React.useState(null)
	const [selectedImage, setSelectedImage] = React.useState(
		'/images/haveYouSeenMyBicycle.jpeg'
	)

	const handleImageClick = (audioFile, imageFile) => {
		setSelectedAudio(audioFile)
		setSelectedImage(imageFile)
	}

	return (
		<MaxWidthWrapper>
			{selectedImage && (
				<SelectedImageWrapper>
					<SelectedImage src={selectedImage} alt='selected image' />
				</SelectedImageWrapper>
			)}
			<Wrapper>
				{imageArray.map(({ id, source, alt, audioFile }) => (
					<ImageWrapper key={id}>
						<Image
							src={source}
							alt={alt}
							onClick={() => handleImageClick(audioFile, source)}
						/>
					</ImageWrapper>
				))}

				{selectedAudio && (
					<AudioPlayer
						style={{ display: 'none' }}
						src={selectedAudio}
						autoPlay
						controls
						onEnded={() => setSelectedAudio(null)}
					/>
				)}
			</Wrapper>
		</MaxWidthWrapper>
	)
}

const MaxWidthWrapper = styled.div`
	max-width: 1250px;
	margin: auto;
`

const SelectedImageWrapper = styled.div`
  margin-bottom: 16px;
`

const SelectedImage = styled.img`
	display: block;
	object-fit: cover;
	width: 100%;
	max-height: 300px;
	object-position: 50% 20%;
  border-radius: 16px;
`

const Wrapper = styled.div`
	--min-col-width: min(100px, 100%);
	min-height: 100svh;
	display: grid;
	place-content: center;
	gap: 16px;
	grid-template-columns: repeat(auto-fill, minmax(var(--min-col-width), 1fr));
	grid-template-rows: repeat(auto-fill, minmax(var(--min-col-width), 1fr));
`

const ImageWrapper = styled.div`
	display: grid;
`

const Image = styled.img`
	display: block;
	object-fit: cover;
	width: 100%;
	height: 100px;
	border-radius: 8px;
`

export default App
