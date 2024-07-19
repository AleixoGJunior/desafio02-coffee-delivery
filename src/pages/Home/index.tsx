import { useTheme } from 'styled-components'
import {
  CoffeeList,
  Heading,
  HomeContainer,
  HomeContent,
  Info,
} from './styles.ts'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import bannerCoffee from '../../assets/images/banner-coffee.svg'
import bannerCoffeeBg from '../../assets/images/banner-coffee-bg.svg'

import { coffees } from '../../db/coffees.json'
import { Card } from '../../components/Card'

export function Home() {
  const theme = useTheme()

  return (
    <div>
      <HomeContainer>
        <HomeContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>

            <Info>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['yellow-dark'] }}
                />
                <span>Compra simples e segura</span>
              </div>

              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['base-text'] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.yellow }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.purple }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </Info>
          </div>

          <img src={bannerCoffee} alt="Café do Coffee Delivery" />
        </HomeContent>
        <img
          src={bannerCoffeeBg}
          id="banner-coffee-bg"
          alt="Café do Coffee Delivery"
        />
      </HomeContainer>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </div>
  )
}
