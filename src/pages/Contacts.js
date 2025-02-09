import styled from 'styled-components';
import { theme } from '../theme';

const ContactContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: ${theme.radii.md};
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0 1.5rem;
  border: 1px solid #ddd;
  border-radius: ${theme.radii.sm};
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 0.8rem;
  margin: 0.5rem 0 1.5rem;
  border: 1px solid #ddd;
  border-radius: ${theme.radii.sm};
`;

const SubmitButton = styled.button`
  background: ${theme.gradients.main};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: ${theme.radii.md};
  cursor: pointer;
  font-size: 1.1rem;
  width: 100%;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export default function Contacts() {
    return (
        <ContactContainer>
            <h2>Contact Us</h2>
            <Form>
                <div>
                    <label>Name:</label>
                    <Input type="text" required />
                </div>

                <div>
                    <label>Email:</label>
                    <Input type="email" required />
                </div>

                <div>
                    <label>Message:</label>
                    <TextArea required />
                </div>

                <SubmitButton type="submit">Send Message</SubmitButton>
            </Form>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <h3>Visit Us</h3>
                <p>🏃 Gorky Park Running Track</p>
                <p>📞 +7 (999) 123-45-67</p>
                <p>📧 hello@gryadka.run</p>
            </div>
        </ContactContainer>
    );
}