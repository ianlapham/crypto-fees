import registerAave from './aave';
import registerAvalanche from './avalanche';
import registerBalancer from './balancer';
import registerBancor from './bancor';
import registerBSC from './bsc';
import registerCoinMetrics from './coinmetrics';
import registerCompound from './compound';
// import registerCurve from './curve';
import registerQuickswap from './quickswap';
import registerHegic from './hegic';
import registerHoneyswap from './honeyswap';
import registerLinkswap from './linkswap';
import registerMaker from './maker';
import register0x from './zerox';
import registerMstable from './mStable';
import registerPolygon from './polygon';
import registerPolymarket from './polymarket';
import registerRen from './ren';
import registerSushiswap from './sushi';
import registerSynthetix from './synthetix';
import registerPolkadot from './polkadot';
import registerTBTC from './tbtc';
import registerTerra from './terra';
import registerTornado from './tornado';
import registerUniswap from './uniswap';
import registerXDai from './xdai';
import registerZilliqa from './zilliqa';

interface Adapter {
  query: any;
  metadata: any;
}

const adapters: { [id: string]: Adapter } = {};
const ids: string[] = [];

const register = (id: string, query: any, metadata: any) => {
  ids.push(id);
  adapters[id] = { query, metadata };
};

register0x(register);
registerAave(register);
registerAvalanche(register);
registerBalancer(register);
registerBancor(register);
registerBSC(register);
registerCoinMetrics(register);
registerCompound(register);
// registerCurve(register);
registerHegic(register);
registerHoneyswap(register);
registerLinkswap(register);
registerMaker(register);
registerMstable(register);
registerQuickswap(register);
registerPolkadot(register);
registerPolygon(register);
registerPolymarket(register);
registerRen(register);
registerSushiswap(register);
registerSynthetix(register);
registerTBTC(register);
registerTerra(register);
registerTornado(register);
registerUniswap(register);
registerXDai(register);
registerZilliqa(register);

export const getIDs = () => ids;

export function getMetadata(id: string) {
  if (!adapters[id]) {
    throw new Error(`Unknown protocol ${id}`);
  }
  return adapters[id].metadata;
}

export async function queryAdapter(protocol: string, attribute: string, date: string) {
  if (!adapters[protocol]) {
    throw new Error(`Unknown protocol ${protocol}`);
  }

  const value = adapters[protocol].query(attribute, date);
  return value;
}
