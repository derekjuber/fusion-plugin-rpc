import browserDataFetching from './browser';
import serverDataFetching from './server';

export {default as mock} from './mock';

const RPC = __BROWSER__ ? browserDataFetching : serverDataFetching;

export default RPC;
export {RPCHandlersToken} from './tokens';
export {RPCRoutePrefixConfigToken} from './browser';
