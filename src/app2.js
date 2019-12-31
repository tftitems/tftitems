import React from 'react';
import logo from './logo.svg';
import background from './background/hauntlingbackground.jpeg';
import elements from './pics/elements.jpeg';
import './App.css';
import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination} from 'react-table';
import bfsword from './pics/items/b-f-sword.png';
import chainvest from './pics/items/chain-vest.png';
import giantsbelt from './pics/items/giants-belt.png';
import needlesslylargerod from './pics/items/needlessly-large-rod.png';
import negatroncloak from './pics/items/negatron-cloak.png';
import recurvebow from './pics/items/recurve-bow.png';
import goldenspatula from './pics/items/golden-spatula.png';
import tearofthegoddess from './pics/items/tear-of-the-goddess.png';

import deathblade from './pics/items/deathblade.png';

//
import guardianangel from './pics/items/guardian-angel.png';
import thornmail from './pics/items/thornmail.png';
//
import zekesherald from './pics/items/zekes-herald.png';
import redbuff from './pics/items/red-buff.png';
import warmogsarmor from './pics/items/warmogs-armor.png';
//
import hextechgunblade from './pics/items/hextech-gunblade.png';
import locketoftheironsolari from './pics/items/locket-of-the-iron-solari.png';
import morellonomicon from './pics/items/morellonomicon.png';
import rabadonsdeathcap from './pics/items/rabadons-deathcap.png';
//
import bloodthirster from './pics/items/bloodthirster.png';
import swordbreaker from './pics/items/sword-breaker.png';
import zephyr from './pics/items/zephyr.png';
import ionicspark from './pics/items/ionic-spark.png';
import dragonsclaw from './pics/items/dragons-claw.png';
//
import giantslayer from './pics/items/giant-slayer.png';
import phantomdancer from './pics/items/phantom-dancer.png';
import titanichydra from './pics/items/titanic-hydra.png';
import guinsoosrageblade from './pics/items/guinsoos-rageblade.png';
import runaanshurricane from './pics/items/runaans-hurricane.png';
import rapidfirecannon from './pics/items/rapid-firecannon.png';
//
import youmuusghostblade from './pics/items/youmuus-ghostblade.png';
import wardensmail from './pics/items/wardens-mail.png';
import frozenmallet from './pics/items/frozen-mallet.png';
import infernocinder from './pics/items/inferno-cinder.png';
import talismanoflight from './pics/items/talisman-of-light.png';
import bladeoftheruinedking from './pics/items/blade-of-the-ruined-king.png';
import forceofnature from './pics/items/force-of-nature.png';
//
import spearofshojin from './pics/items/spear-of-shojin.png';
import frozenheart from './pics/items/frozen-heart.png';
import redemption from './pics/items/redemption.png';
import ludensecho from './pics/items/ludens-echo.png';
import hush from './pics/items/hush.png';
import statikkshiv from './pics/items/statikk-shiv.png';
import magescap from './pics/items/mages-cap.png';
import seraphsembrace from './pics/items/seraphs-embrace.png';
//
import sparringgloves from './pics/items/sparring-gloves.png';
import infinityedge from './pics/items/infinity-edge.png';
import iceborngauntlet from './pics/items/iceborn-gauntlet.png';
import trapclaw from './pics/items/trap-claw.png';
import jeweledgauntlet from './pics/items/jeweled-gauntlet.png';
import quicksilver from './pics/items/quicksilver.png';
import repeatingcrossbow from './pics/items/repeating-crossbow.png';
import berserkeraxe from './pics/items/berserker-axe.png';
import handofjustice from './pics/items/hand-of-justice.png';
import thiefsgloves from './pics/items/thiefs-gloves.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="panel1">
          <p>TEAMFIGHT TACTICS</p>
          <p>
            <table>
              <tr>
                <th></th>
                <th><img src={bfsword} /></th>
                <th><img src={chainvest} /></th>
                <th><img src={giantsbelt} /></th>
                <th><img src={needlesslylargerod} /></th>
                <th><img src={negatroncloak} /></th>
                <th><img src={recurvebow} /></th>
                <th><img src={goldenspatula} height='64' width='64'/></th>
                <th><img src={tearofthegoddess} /></th>
                <th><img src={sparringgloves} /></th>
              </tr>
              <tr>
                <th><img src={bfsword} /></th>
                <td><img src={deathblade} /></td>
                <td><img src={guardianangel} /></td>
                <td><img src={zekesherald} /></td>
                <td><img src={hextechgunblade} /></td>
                <td><img src={bloodthirster} /></td>
                <td><img src={giantslayer} /></td>
                <td><img src={youmuusghostblade} /></td>
                <td><img src={spearofshojin} /></td>
                <td><img src={infinityedge} /></td>
              </tr>
              <tr>
                <th><img src={chainvest} /></th>
                <td></td>
                <td><img src={thornmail} /></td>
                <td><img src={redbuff} /></td>
                <td><img src={locketoftheironsolari} /></td>
                <td><img src={swordbreaker} /></td>
                <td><img src={phantomdancer} /></td>
                <td><img src={wardensmail} /></td>
                <td><img src={frozenheart} /></td>
                <td><img src={iceborngauntlet} /></td>
              </tr>
              <tr>
                <th><img src={giantsbelt} /></th>
                <td></td>
                <td></td>
                <td><img src={warmogsarmor} /></td>
                <td><img src={morellonomicon} /></td>
                <td><img src={zephyr} /></td>
                <td><img src={titanichydra} /></td>
                <td><img src={frozenmallet} /></td>
                <td><img src={redemption} /></td>
                <td><img src={trapclaw} /></td>
              </tr>
              <tr>
                <th><img src={needlesslylargerod} /></th>
                <td></td>
                <td></td>
                <td></td>
                <td><img src={rabadonsdeathcap} /></td>
                <td><img src={ionicspark} /></td>
                <td><img src={guinsoosrageblade} /></td>
                <td><img src={infernocinder} /></td>
                <td><img src={ludensecho} /></td>
                <td><img src={jeweledgauntlet} /></td>
              </tr>
              <tr>
                <th><img src={negatroncloak} /></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><img src={dragonsclaw} /></td>
                <td><img src={runaanshurricane} /></td>
                <td><img src={talismanoflight} /></td>
                <td><img src={hush} /></td>
                <td><img src={quicksilver} /></td>
              </tr>
              <tr>
                <th><img src={recurvebow} /></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><img src={rapidfirecannon} /></td>
                <td><img src={bladeoftheruinedking} /></td>
                <td><img src={statikkshiv} /></td>
                <td><img src={repeatingcrossbow} /></td>
              </tr>
              <tr>
                <th><img src={goldenspatula} height='64' width='64'/></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><img src={forceofnature} /></td>
                <td><img src={magescap} /></td>
                <td><img src={berserkeraxe} /></td>
              </tr>
              <tr>
                <th><img src={tearofthegoddess} /></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><img src={seraphsembrace} /></td>
                <td><img src={handofjustice} /></td>
              </tr>
              <tr>
                <th><img src={sparringgloves} /></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><img src={thiefsgloves} /></td>
              </tr>

            </table>
          </p>
        </div>
      </header>
      <body>
        <div id='elements'>
          <img  src={elements} alt='elements'/>
        </div>
      </body>
    </div>
  );
}

export default App;
