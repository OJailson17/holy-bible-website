/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext, useState } from 'react';
import { PageTitle } from '../../components/Title/PageTitle';
import { Verse } from '../../components/Verse/Verse';
import { NumberNavigation } from '../../components/Navigation/NumberNavigation';
import { ExtraBtn } from '../../components/ExtraBtn/ExtraBtn';
import { PageWrapper } from '../../components/PageWrapper/PageWrapper';
import { BtnContainer } from '../../components/BtnContainer/BtnContainer';
import { useHistory, useParams } from 'react-router-dom';
import { BibleContextProvider } from '../../context/bibleContext';
import { addFavorite } from '../../components/helper/addFavorite';
import { removeFavorite } from '../../components/helper/removeFavorite';
import { Loader } from '../../components/Loader/Loader';

export function VersePage() {
	const { verseNum } = useParams();
	const {
		chapterData,
		verse,
		setVerseNum,
		isFavorite,
		setIsFavorite,
		verseObj,
	} = useContext(BibleContextProvider);
	const history = useHistory();
	const [isReady, setIsReady] = useState(false);

	const readChapter = () => {
		history.push('/biblia');
	};

	const handleFavorite = e => {
		if (!isFavorite) {
			addFavorite(verseObj);
			setIsFavorite(true);
		} else {
			removeFavorite({
				name: verse?.book?.name,
				chapter: verse?.chapter,
				verse: verse?.number,
			});
			setIsFavorite(false);
		}
	};

	useEffect(() => {
		setVerseNum(verseNum);
	}, []);

	useEffect(() => {
		if (verse?.book !== undefined) setIsReady(true);
	}, [verse]);

	return (
		<>
			{isReady ? (
				<>
					<PageTitle />

					<main>
						<PageWrapper secondary>
							<div style={{ width: '100%' }}>
								<Verse chapterData={verse} versePage={true} />
							</div>
							<NumberNavigation
								title='Versiculos'
								numbers={chapterData?.chapter?.verses}
								versePage
							/>
						</PageWrapper>
						<BtnContainer>
							<ExtraBtn clickFunction={handleFavorite}>
								{isFavorite
									? 'Remover dos favoitos'
									: 'Adicionar aos favoritos'}
							</ExtraBtn>
							<ExtraBtn clickFunction={readChapter}>Ler capítulo</ExtraBtn>
						</BtnContainer>
					</main>
				</>
			) : (
				<Loader isReady={!isReady} />
			)}
		</>
	);
}
