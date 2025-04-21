import styled from 'styled-components';
import { theme } from '../theme';

const TrainingContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PlanGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const PlanCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: ${theme.radii.md};
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
`;

const Price = styled.div`
  font-size: 2rem;
  color: ${theme.colors.secondary};
  margin: 1rem 0;
`;

export default function Training() {
    const plans = [
        {
            name: 'Групповая тренировка',
            price: '1 000 рублей',
            features: ['1 групповая тренировка']
        },
        {
            name: 'Персональная тренировка',
            price: '2 500 рублей',
            features: ['1 персональная тренировка']
        },
        {
            name: 'Простой старт',
            price: '7 000 рублей',
            features: [
                'Тренировочный план на месяц',
                'Оперативная связь с тренером']
        },
        {
            name: 'Уверенное начало',
            price: '10 000 рублей',
            features: ['4 групповые тренировки',
                'Тренировочный план на месяц',
                'Оперативная связь с тренером',
                'Разбор техники по видео']
        },
        {
            name: 'Серьезный настрой',
            price: '8 000 рублей',
            features: ['безлимитные групповые тренировки на месяц',
                'Помощь с планированием сезона и выбор стартов'
            ]
        }
    ];

    return (
        <TrainingContainer>
            <h2>Тренировочные планы и цены</h2>
            <PlanGrid>
                {plans.map((plan, index) => (
                    <PlanCard key={index}>
                        <h3>{plan.name}</h3>
                        <Price>{plan.price}</Price>
                        <ul>
                            {plan.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                    </PlanCard>
                ))}
            </PlanGrid>
        </TrainingContainer>
    );
}