import Link from 'next/link';
import { useRouter } from 'next/router';
import {Container, Row, Col} from 'react-bootstrap';
import Navigation from './Navigation';
//import 'bootstrap/dist/css/bootstrap.css';
import { useAtom } from 'jotai';
import { cartListAtom } from '@/store';

export default function Layout(props) {
  //const router = useRouter();
//router.push('/'); // navigate to the home route "/"
const [cartList, setCartList] = useAtom(cartListAtom);
  return (
    <>
    <Navigation></Navigation><br />
      <Container>
        <Row>
          <Col>
            {props.children}
          </Col>
        </Row>
      </Container>
    </>
  );
  //   <>
  //     <h1>Seneca Store</h1>
  //     <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/products">Products</Link> | <Link href="/dashboard">Dashboard</Link> | <Link href="/dashboard/preferences">Dashboard Preferences</Link> | <Link href="/cart">Shopping Cart <span>({cartList.length})</span></Link>
  //     <hr />
  //     <br />
  //     {props.children}
  //     <br />
  //   </>
  // );
}