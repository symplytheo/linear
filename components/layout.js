import Header from '../src/Header';
import Footer from '../src/Footer';

const links = [
  {name: 'About us', to: '/about'},
  {name: 'Pricing', to: ''},
  {name: 'Docs', to: ''},
  {name: 'We\'re Hiring', to: ''},
  {name: 'Twitter', to: ''}
]

export default function Layout({ children }) {
  return (
    <>
      <Header links={links} />
      <div>
        { children }
      </div>
      <Footer links={links} />
    </>
  )
}
