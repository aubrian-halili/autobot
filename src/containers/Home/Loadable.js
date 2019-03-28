import Loadable from 'react-loadable';
import LoadingMask from 'components/LoadingMask';

export default Loadable({
  loader: () => import('./index'),
  loading: LoadingMask,
});
