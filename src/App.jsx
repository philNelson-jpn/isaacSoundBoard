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
			caption: 'ME',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/broughtToYouBy.jpeg',
			alt: 'startled isaac with mustache and HIM hat',
			audioFile: '/sounds/notRecommended.mp3',
			caption: 'AAAAAGGHH',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/chamboFremb.jpeg',
			alt: 'half naked viking isaac',
			audioFile: '/sounds/noLongerAtTheBar.mp3',
			caption: 'At The Bar',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/christmasisaac.jpeg',
			alt: 'isaac with santa hat and dog',
			audioFile: '/sounds/OuchAudio.mp4',
			caption: 'OW',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/devilsTesticle.jpeg',
			alt: 'beared isaac peering into your soul',
			audioFile: '/sounds/diviningRod.mp3',
			caption: 'Divining Rod',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/haveYouSeenMyBicycle.jpeg',
			alt: 'isaac on a buffalo',
			audioFile: '/sounds/GlassPitAudio.mp4',
			caption: 'Glass Pit',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/noLongerAtTheBar.jpeg',
			alt: 'neckless flannel shirt isaac',
			audioFile: '/sounds/jingleMyBells.mp3',
			caption: 'Jingle Bells',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/notRecommended.jpeg',
			alt: 'ddr screaming isaac',
			audioFile: '/sounds/devilsTesticle.mp3',
			caption: "Devil's Testicle",
		},
		{
			id: crypto.randomUUID(),
			source: '/images/theManWithManyHats.jpeg',
			alt: 'isaac with many hats',
			audioFile: '/sounds/chamboFrembNew.mp3',
			caption: 'Chambo Fremb',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/teefs.jpeg',
			alt: 'toothless isaac',
			audioFile: '/sounds/thisAsshole.mp3',
			caption: 'This Asshole',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/IsaacBirdman.png',
			alt: 'Isaac as a bird',
			audioFile: '/sounds/BirdmanAudio.mp4',
			caption: 'Screeeeech',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/IsaacCondom.png',
			alt: 'condom balloon',
			audioFile: 'sounds/IsaacCondomVolumneDown.mp3',
			caption: 'Expands',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/RiceKrispy.png',
			alt: 'Isaac sprays rice krispys',
			audioFile: 'sounds/riceKrispyAudio.mov',
			caption: 'Rice Krispy',
		},
		{
			id: crypto.randomUUID(),
			source: '/images/bicycleImg.png',
			alt: 'Isaac splits for bicycles',
			audioFile: 'sounds/haveYouSeenMyBicycle.mp3',
			caption: 'Bicycle?',
		},
	]

	const [selectedAudio, setSelectedAudio] = React.useState(null)
	const [selectedImage, setSelectedImage] = React.useState(
		'/images/esockhero.png'
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
				{imageArray.map(({ id, source, alt, audioFile, caption }) => (
					<ImageWrapper key={id}>
						<SoundButton>
							<span className='shadow'></span>
							<span className='edge'></span>
							<span className='front'>
								<Image
									src={source}
									alt={alt}
									onClick={() => handleImageClick(audioFile, source)}
								/>
								{caption}
							</span>
						</SoundButton>
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

const SoundButton = styled.button`
	position: relative;
	border: none;
	background: transparent;
	padding: 0;
	cursor: pointer;
	outline-offset: 4px;
	transition: filter 250ms;

	& .shadow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 12px;
		background: hsl(0deg 0% 0% / 0.25);
		will-change: transform;
		transform: translateY(2px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	}

	& .edge {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 8px;
		background: linear-gradient(
			to left,
			hsl(34, 76%, 18%) 0%,
			hsl(34, 76%, 38%) 8%,
			hsl(34, 76%, 38%) 92%,
			hsl(34, 76%, 8%) 100%
		);
	}

	& .front {
		display: block;
		position: relative;
		padding: 6px 12px;
		border-radius: 8px;
		font-size: 1rem;
		color: white;
		background: hsl(34, 48%, 28%);
		will-change: transform;
		transform: translateY(-4px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
		font-size: calc(10 / 16 * 1rem);
	}

	&:hover {
		filter: brightness(110%);
	}
	&:hover .front {
		transform: translateY(-6px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}
	&:active .front {
		transform: translateY(-2px);
		transition: transform 34ms;
	}
	&:hover .shadow {
		transform: translateY(4px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}
	&:active .shadow {
		transform: translateY(1px);
		transition: transform 34ms;
	}
	&:focus:not(:focus-visible) {
		outline: none;
	}
`

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
	max-height: 250px;
	object-position: 50% 15%;
	border-radius: 16px;

	@media screen and (min-width: 600px) {
		max-height: 600px;
		object-position: 50% 20%;
	}

	@media screen and (min-width: 800px) {
		max-height: 700px;
		object-position: 50% 20%;
	}
`

const Wrapper = styled.div`
	--min-col-width: min(100px, 100%);
	min-height: 100svh;
	display: grid;
	place-content: center;
	gap: 12px;
	grid-template-columns: repeat(auto-fill, minmax(var(--min-col-width), 1fr));
	grid-template-rows: repeat(auto-fill, minmax(var(--min-col-width), 1fr));
`

const ImageWrapper = styled.div`
	--outer-radius: 12px;
	--inner-radius: 8px;
	display: grid;
	border-radius: var(--outer-radius);

	& span {
		text-align: center;
		font-size: calc(12 / 16 * 1rem);
	}
`

const Image = styled.img`
	display: block;
	object-fit: cover;
	width: 100%;
	height: 100px;
	border-radius: calc(var(--outer-radius) - var(--inner-radius));
	object-position: 50% 10%;
`

export default App
