import {useState} from 'react';
import styled from 'styled-components';
import {theme} from '../theme';
import {FiX} from 'react-icons/fi';

const GalleryContainer = styled.div`
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
`;

const GalleryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
`;

const GalleryItem = styled.div`
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: ${theme.radii.md};
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.03);

        img {
            filter: brightness(0.9);
        }
    }
`;

const GalleryImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: filter 0.3s ease;
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    position: relative;
    max-width: 90%;
    max-height: 90%;
`;

const ModalImage = styled.img`
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: ${theme.radii.md};
`;

const CloseButton = styled.button`
    position: absolute;
    top: -40px;
    right: -40px;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
`;

export default function PhotoGallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Sample data - replace with your actual images
    const galleryItems = [
        {
            type: 'athlete',
            url: 'https://github.com/frontov/gryadka.run/blob/main/images/team1.jpg?raw=true',
            // caption: 'Marathon Training Session'
        },
        {
            type: 'event',
            url: 'https://github.com/frontov/gryadka.run/blob/main/images/team2.jpg?raw=true',
            // caption: 'Annual City Marathon 2023'
        },
        {
            type: 'event',
            url: 'https://github.com/frontov/gryadka.run/blob/main/images/team3.jpg?raw=true',
            // caption: 'Annual City Marathon 2023'
        },
        {
            type: 'event',
            url: 'https://github.com/frontov/gryadka.run/blob/main/images/team4.jpg?raw=true',
            // caption: 'Annual City Marathon 2023'
        },
        {
            type: 'event',
            url: 'https://github.com/frontov/gryadka.run/blob/main/images/team5.jpg?raw=true',
            // caption: 'Annual City Marathon 2023'
        },
        {
            type: 'event',
            url: 'https://github.com/frontov/gryadka.run/blob/main/images/team6.jpg?raw=true',
            // caption: 'Annual City Marathon 2023'
        },
        // Add more images...
    ];

    return (
        <GalleryContainer>
            <h2>Красивые мы</h2>
            <GalleryGrid>
                {galleryItems.map((item, index) => (
                    <GalleryItem key={index} onClick={() => setSelectedImage(item)}>
                        <GalleryImage
                            src={item.url}
                            alt={item.caption}
                        />
                    </GalleryItem>
                ))}
            </GalleryGrid>

            {selectedImage && (
                <ModalOverlay onClick={() => setSelectedImage(null)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={() => setSelectedImage(null)}>
                            <FiX/>
                        </CloseButton>
                        <ModalImage
                            src={selectedImage.url}
                            alt={selectedImage.caption}
                        />
                        <p style={{color: 'white', textAlign: 'center', marginTop: '1rem'}}>
                            {selectedImage.caption}
                        </p>
                    </ModalContent>
                </ModalOverlay>
            )}
        </GalleryContainer>
    );
}