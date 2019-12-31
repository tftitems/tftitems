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

import ReactTooltip from 'react-tooltip';
import $ from 'jquery';

class App extends React.Component {
  constructor() {
    super();
    this.handleHover = this.handleHover.bind(this);
  }
  componentDidMount() {
    this.handleHover();
  }

  handleHover() {
    $(function() {
       $('.bfsword').hover( 
        function(){
          $('img.icon').css('opacity', '25%');
          $('.bfsword').css('opacity', '100%');
          $('.toprow').css('opacity', '100%');
       },
       function(){
          $('img.icon').css('opacity', '100%');
       });

       $('.chainvest').hover( 
        function(){
          $('img.icon').css('opacity', '25%');
          $('.chainvest').css('opacity', '100%');
          $('.toprow').css('opacity', '100%');
       },
       function(){
          $('img.icon').css('opacity', '100%');
       });

       $('.giantsbelt').hover( 
        function(){
          $('img.icon').css('opacity', '25%');
          $('.giantsbelt').css('opacity', '100%');
          $('.toprow').css('opacity', '100%');
       },
       function(){
          $('img.icon').css('opacity', '100%');
       });

       $('.needlesslylargerod').hover( 
        function(){
          $('img.icon').css('opacity', '25%');
          $('.needlesslylargerod').css('opacity', '100%');
          $('.toprow').css('opacity', '100%');
       },
       function(){
          $('img.icon').css('opacity', '100%');
       });

       $('.negatroncloak').hover( 
        function(){
          $('img.icon').css('opacity', '25%');
          $('.negatroncloak').css('opacity', '100%');
          $('.toprow').css('opacity', '100%');
       },
       function(){
          $('img.icon').css('opacity', '100%');
       });

       $('.recurvebow').hover( 
        function(){
          $('img.icon').css('opacity', '25%');
          $('.recurvebow').css('opacity', '100%');
          $('.toprow').css('opacity', '100%');
       },
       function(){
          $('img.icon').css('opacity', '100%');
       });

       $('.goldenspatula').hover( 
        function(){
          $('img.icon').css('opacity', '25%');
          $('.goldenspatula').css('opacity', '100%');
          $('.toprow').css('opacity', '100%');
       },
       function(){
          $('img.icon').css('opacity', '100%');
       });

       $('.tearofthegoddess').hover( 
        function(){
          $('img.icon').css('opacity', '25%');
          $('.tearofthegoddess').css('opacity', '100%');
          $('.toprow').css('opacity', '100%');
       },
       function(){
          $('img.icon').css('opacity', '100%');
       });

       $('.sparringgloves').hover( 
        function(){
          $('img.icon').css('opacity', '25%');
          $('.sparringgloves').css('opacity', '100%');
          $('.toprow').css('opacity', '100%');
       },
       function(){
          $('img.icon').css('opacity', '100%');
       });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p id='title'>TEAMFIGHT TACTICS</p>
          <p>
            <table>
              <tr>
                <th></th>
                <th class="table-header"><img data-tip data-for="bfsword" class='icon toprow' src={bfsword} />
                  <ReactTooltip id="bfsword" place="top" type="dark" effect="float">
                    <p>B.F. Sword</p>
                    <span>+15 Attack Damage</span>
                  </ReactTooltip>
                </th>
                <th class="table-header"><img data-tip data-for="chainvest" class='icon toprow' src={chainvest} />
                  <ReactTooltip id="chainvest" place="top" type="dark" effect="float">
                    <p>Chain Vest</p>
                    <span>+25 Armor</span>
                  </ReactTooltip>
                </th>
                <th class="table-header"><img data-tip data-for="giantsbelt" class='icon toprow' src={giantsbelt} />
                  <ReactTooltip id="giantsbelt" place="top" type="dark" effect="float">
                    <p>Giant's Belt</p>
                    <span>+200 Health</span>
                  </ReactTooltip>
                </th>
                <th class="table-header"><img data-tip data-for="needlesslylargerod" class='icon toprow' src={needlesslylargerod} />
                  <ReactTooltip id="needlesslylargerod" place="top" type="dark" effect="float">
                    <p>Needlessly Large Rod</p>
                    <span>+20 Spell Damage</span>
                  </ReactTooltip>
                </th>
                <th class="table-header"><img data-tip data-for="negatroncloak" class='icon toprow' src={negatroncloak} />
                  <ReactTooltip id="negatroncloak" place="top" type="dark" effect="float">
                    <p>Negatron Cloak</p>
                    <span>+25 Magic Resist</span>
                  </ReactTooltip>
                </th>
                <th class="table-header"><img data-tip data-for="recurvebow" class='icon toprow' src={recurvebow} />
                  <ReactTooltip id="recurvebow" place="top" type="dark" effect="float">
                    <p>Recurve Bow</p>
                    <span>+15% Attack Speed</span>
                  </ReactTooltip>
                </th>
                <th class="table-header"><img data-tip data-for="goldenspatula" class='icon toprow' src={goldenspatula} height='64' width='64'/>
                  <ReactTooltip id="goldenspatula" place="top" type="dark" effect="float">
                    <p>Spatula</p>
                    <span>It must do something...</span>
                  </ReactTooltip>
                </th>
                <th class="table-header"><img data-tip data-for="tearofthegoddess" class='icon toprow' src={tearofthegoddess} />
                  <ReactTooltip id="tearofthegoddess" place="top" type="dark" effect="float">
                    <p>Tear of the Goddess</p>
                    <span>+20 Mana</span>
                  </ReactTooltip>
                </th>
                <th class="table-header"><img data-tip data-for="sparringgloves" class='icon toprow' src={sparringgloves} />
                  <ReactTooltip id="sparringgloves" place="top" type="dark" effect="float">
                    <p>Sparring Gloves</p>
                    <span>+10% Crit +10% Dodge</span>
                  </ReactTooltip>
                </th>
              </tr>
              <tr>
                <th class="column-header"><img data-tip data-for="bfsword" class='icon toprow' src={bfsword} /></th>
                <td><img data-tip data-for="deathblade" class='icon bfsword' src={deathblade} /></td>
              </tr>
              <tr>
                <th class="column-header"><img data-tip data-for="chainvest" class='icon toprow' src={chainvest} /></th>
                <td><img data-tip data-for="guardianangel" class='icon chainvest bfsword' src={guardianangel} /></td>
                <td><img data-tip data-for="thornmail" class='icon chainvest' src={thornmail} /></td>
              </tr>
              <tr>
                <th class="column-header"><img data-tip data-for="giantsbelt"  class='icon toprow' src={giantsbelt} /></th>
                <td><img data-tip data-for="zekesherald" class='icon giantsbelt bfsword' src={zekesherald} /></td>
                <td><img data-tip data-for="redbuff" class='icon giantsbelt chainvest' src={redbuff} /></td>
                <td><img data-tip data-for="warmogsarmor" class='icon giantsbelt' src={warmogsarmor} /></td>
              </tr>
              <tr>
                <th class="column-header"><img data-tip data-for="needlesslylargerod" class='icon toprow' src={needlesslylargerod} /></th>
                <td><img data-tip data-for="hextechgunblade" class='icon needlesslylargerod bfsword' src={hextechgunblade} /></td>
                <td><img data-tip data-for="locketoftheironsolari" class='icon needlesslylargerod chainvest' src={locketoftheironsolari} /></td>
                <td><img data-tip data-for="morellonomicon" class='icon needlesslylargerod giantsbelt' src={morellonomicon} /></td>
                <td><img data-tip data-for="rabadonsdeathcap" class='icon needlesslylargerod' src={rabadonsdeathcap} /></td>
              </tr>
              <tr>
                <th class="column-header"><img data-tip data-for="negatroncloak" class='icon toprow' src={negatroncloak} /></th>
                <td><img data-tip data-for="bloodthirster" class='icon negatroncloak bfsword' src={bloodthirster} /></td>
                <td><img data-tip data-for="swordbreaker" class='icon negatroncloak chainvest' src={swordbreaker} /></td>
                <td><img data-tip data-for="zephyr" class='icon negatroncloak giantsbelt' src={zephyr} /></td>
                <td><img data-tip data-for="ionicspark" class='icon negatroncloak needlesslylargerod' src={ionicspark} /></td>
                <td><img data-tip data-for="dragonsclaw" class='icon negatroncloak' src={dragonsclaw} /></td>
              </tr>
              <tr>
                <th class="column-header"><img data-tip data-for="recurvebow" class='icon toprow' src={recurvebow} /></th>
                <td><img data-tip data-for="giantslayer" class='icon recurvebow bfsword' src={giantslayer} /></td>
                <td><img data-tip data-for="phantomdancer" class='icon recurvebow chainvest' src={phantomdancer} /></td>
                <td><img data-tip data-for="titanichydra" class='icon recurvebow giantsbelt' src={titanichydra} /></td>
                <td><img data-tip data-for="guinsoosrageblade" class='icon recurvebow needlesslylargerod' src={guinsoosrageblade} /></td>
                <td><img data-tip data-for="runaanshurricane" class='icon recurvebow negatroncloak' src={runaanshurricane} /></td>
                <td><img data-tip data-for="rapidfirecannon" class='icon recurvebow' src={rapidfirecannon} /></td>
              </tr>
              <tr>
                <th class="column-header"><img data-tip data-for="goldenspatula" class='icon toprow' src={goldenspatula}  height='64' width='64'/></th>
                <td><img data-tip data-for="youmuusghostblade" class='icon goldenspatula bfsword' src={youmuusghostblade} /></td>
                <td><img data-tip data-for="wardensmail" class='icon goldenspatula chainvest' src={wardensmail} /></td>
                <td><img data-tip data-for="frozenmallet" class='icon goldenspatula giantsbelt' src={frozenmallet} /></td>
                <td><img data-tip data-for="infernocinder" class='icon goldenspatula needlesslylargerod' src={infernocinder} /></td>
                <td><img data-tip data-for="talismanoflight" class='icon goldenspatula negatroncloak' src={talismanoflight} /></td>
                <td><img data-tip data-for="bladeoftheruinedking" class='icon goldenspatula recurvebow' src={bladeoftheruinedking} /></td>
                <td><img data-tip data-for="forceofnature" class='icon goldenspatula' src={forceofnature} /></td>
              </tr>
              <tr>
                <th class="column-header"><img data-tip data-for="tearofthegoddess" class='icon toprow' src={tearofthegoddess} /></th>
                <td><img data-tip data-for="spearofshojin" class='icon tearofthegoddess bfsword' src={spearofshojin} /></td>
                <td><img data-tip data-for="frozenheart" class='icon tearofthegoddess chainvest' src={frozenheart} /></td>
                <td><img data-tip data-for="redemption" class='icon tearofthegoddess giantsbelt' src={redemption} /></td>
                <td><img data-tip data-for="ludensecho" class='icon tearofthegoddess needlesslylargerod' src={ludensecho} /></td>
                <td><img data-tip data-for="hush" class='icon tearofthegoddess negatroncloak' src={hush} /></td>
                <td><img data-tip data-for="statikkshiv" class='icon tearofthegoddess recurvebow' src={statikkshiv} /></td>
                <td><img data-tip data-for="magescap" class='icon tearofthegoddess goldenspatula' src={magescap} /></td>
                <td><img data-tip data-for="seraphsembrace" class='icon tearofthegoddess' src={seraphsembrace} /></td>
              </tr>
              <tr>
                <th class="column-header"><img data-tip data-for="sparringgloves" class='icon toprow' src={sparringgloves} /></th>
                <td><img data-tip data-for="infinityedge" class='icon sparringgloves bfsword' src={infinityedge} /></td>
                <td><img data-tip data-for="iceborngauntlet" class='icon sparringgloves chainvest' src={iceborngauntlet} /></td>
                <td><img data-tip data-for="trapclaw" class='icon sparringgloves giantsbelt' src={trapclaw} /></td>
                <td><img data-tip data-for="jeweledgauntlet" class='icon sparringgloves needlesslylargerod' src={jeweledgauntlet} /></td>
                <td><img data-tip data-for="quicksilver" class='icon sparringgloves negatroncloak' src={quicksilver} /></td>
                <td><img data-tip data-for="repeatingcrossbow" class='icon sparringgloves recurvebow' src={repeatingcrossbow} /></td>
                <td><img data-tip data-for="berserkeraxe" class='icon sparringgloves goldenspatula' src={berserkeraxe} /></td>
                <td><img data-tip data-for="handofjustice" class='icon sparringgloves tearofthegoddess' src={handofjustice} /></td>
                <td><img data-tip data-for="thiefsgloves" class='icon sparringgloves' src={thiefsgloves} /></td>
              </tr>

            </table>
            <ReactTooltip id="iceborngauntlet" place="top" type="dark" effect="float">
              <p>Iceborne Gauntlet</p>
              <span>On dodge, create an expandable zone that lowers Attack Speed by 35%.</span>
            </ReactTooltip>
            <ReactTooltip id="guardianangel" place="top" type="dark" effect="float">
              <p>Guardian Angel</p>
              <span>Wearer revives with 400 health.</span>
            </ReactTooltip>
            <ReactTooltip id="hush" place="top" type="dark" effect="float">
              <p>Hush</p>
              <span>Attacks have a 25% chance to prevent the enemy champion from gaining mana for four seconds.</span>
            </ReactTooltip>
            <ReactTooltip id="hextechgunblade" place="top" type="dark" effect="float">
              <p>Hextech Gunblade</p>
              <span>Heal for 25% of all damage dealt.</span>
            </ReactTooltip>
            <ReactTooltip id="guardianangel" place="top" type="dark" effect="float">
              <p>Guardian Angel</p>
              <span>Wearer revives with 400 health.</span>
            </ReactTooltip>
            <ReactTooltip id="guinsoosrageblade" place="top" type="dark" effect="float">
              <p>Guinsoo's Rageblade</p>
              <span>Attacks grant 4% attack speed (stacks infinitely).</span>
            </ReactTooltip>
            <ReactTooltip id="giantslayer" place="top" type="dark" effect="float">
              <p>Giant Slayer</p>
              <span>Attacks deal an additional 9% enemy current health as True Damage.</span>
            </ReactTooltip>
            <ReactTooltip id="runaanshurricane" place="top" type="dark" effect="float">
              <p>Runaan's Hurricane</p>
              <span>Attacks 1 extra target on attack. Extra attacks deal 60% damage.</span>
            </ReactTooltip>
            <ReactTooltip id="rapidfirecannon" place="top" type="dark" effect="float">
              <p>Rapid Firecannon</p>
              <span>Attack range is doubled.</span>
            </ReactTooltip>
            <ReactTooltip id="repeatingcrossbow" place="top" type="dark" effect="float">
              <p>Repeating Crossbow</p>
              <span>On death, this jumps to an allied champion and grants an additional 20% Attack Speed & Critical Strike chance.</span>
            </ReactTooltip>
            <ReactTooltip id="rabadonsdeathcap" place="top" type="dark" effect="float">
              <p>Rabadon's Deathcap</p>
              <span>+75% Ability Power.</span>
            </ReactTooltip>
            <ReactTooltip id="phantomdancer" place="top" type="dark" effect="float">
              <p>Phantom Dancer</p>
              <span>Wearer negates bonus damage from critical strikes.</span>
            </ReactTooltip>
            <ReactTooltip id="redemption" place="top" type="dark" effect="float">
              <p>Redemption</p>
              <span>At 25% health, heal all nearby allies for 1200 health.</span>
            </ReactTooltip>
            <ReactTooltip id="redbuff" place="top" type="dark" effect="float">
              <p>Red Buff</p>
              <span>Attacks deal burn damage equal to 2% of the enemy's maximum health per second for 10 seconds.</span>
            </ReactTooltip>
            <ReactTooltip id="quicksilver" place="top" type="dark" effect="float">
              <p>Quicksilver</p>
              <span>When CC’d, cleanse the CC. 3 second cooldown.</span>
            </ReactTooltip>
            <ReactTooltip id="morellonomicon" place="top" type="dark" effect="float">
              <p>Morellonomicon</p>
              <span>Spells deal burn damage equal to 2% of the enemy's maximum health per second for 10 seconds.</span>
            </ReactTooltip>
            <ReactTooltip id="magescap" place="top" type="dark" effect="float">
              <p>Mage's Cap</p>
              <span>Wearer is also a Mage</span>
            </ReactTooltip>
            <ReactTooltip id="ludensecho" place="top" type="dark" effect="float">
              <p>Luden's Echo</p>
              <span>Spells deal 150 splash damage on hit.</span>
            </ReactTooltip>
            <ReactTooltip id="locketoftheironsolari" place="top" type="dark" effect="float">
              <p>Locket of the Iron Solari</p>
              <span>At the start of combat, all champions within two spaces to the left and right of the wearer gain a 300 health shield for 7 seconds.</span>
            </ReactTooltip>
            <ReactTooltip id="infinityedge" place="top" type="dark" effect="float">
              <p>Infinity Edge</p>
              <span>+125% Critical Strike Damage.</span>
            </ReactTooltip>
            <ReactTooltip id="jeweledgauntlet" place="top" type="dark" effect="float">
              <p>Jeweled Gauntlet</p>
              <span>Your spells can crit.</span>
            </ReactTooltip>
            <ReactTooltip id="ionicspark" place="top" type="dark" effect="float">
              <p>Ionic Spark</p>
              <span>Whenever an enemy casts a spell, they take 100 True damage.</span>
            </ReactTooltip>
            <ReactTooltip id="infernocinder" place="top" type="dark" effect="float">
              <p>Inferno's Cinder</p>
              <span>Wearer is also Inferno.</span>
            </ReactTooltip>
            <ReactTooltip id="zekesherald" place="top" type="dark" effect="float">
              <p>Zeke's Herald</p>
              <span>Allies within 2 spaces to the left or right gain +15% attack speed.</span>
            </ReactTooltip>
            <ReactTooltip id="youmuusghostblade" place="top" type="dark" effect="float">
              <p>Youmuu's Ghostblade</p>
              <span>Wearer is also an Assassin.</span>
            </ReactTooltip>
            <ReactTooltip id="wardensmail" place="top" type="dark" effect="float">
              <p>Warden's Mail</p>
              <span>Wearer is also a Warden.</span>
            </ReactTooltip>
            <ReactTooltip id="zephyr" place="top" type="dark" effect="float">
              <p>Zephyr</p>
              <span>On start of combat, banish an enemy for 6 seconds.</span>
            </ReactTooltip>
            <ReactTooltip id="warmogsarmor" place="top" type="dark" effect="float">
              <p>Warmog's Armor</p>
              <span>Wearer regenerates 6% of their missing health per second.</span>
            </ReactTooltip>
            <ReactTooltip id="trapclaw" place="top" type="dark" effect="float">
              <p>Trap Claw</p>
              <span>On combat begin, gain a spell shield. When it breaks, stun the champion who broke the shield.</span>
            </ReactTooltip>
            <ReactTooltip id="titanichydra" place="top" type="dark" effect="float">
              <p>Titanic Hydra</p>
              <span>3% Max Health to target and adjacent enemies behind them.</span>
            </ReactTooltip>
            <ReactTooltip id="talismanoflight" place="top" type="dark" effect="float">
              <p>Talisman of Light</p>
              <span>Wearer is also Light.</span>
            </ReactTooltip>
            <ReactTooltip id="thornmail" place="top" type="dark" effect="float">
              <p>Thornmail</p>
              <span>Reflects 100% of physical damage that was mitigated.</span>
            </ReactTooltip>
            <ReactTooltip id="thiefsgloves" place="top" type="dark" effect="float">
              <p>Thief's Gloves</p>
              <span>This item takes all three item slots. On round begin, copy two random items.</span>
            </ReactTooltip>
            <ReactTooltip id="statikkshiv" place="top" type="dark" effect="float">
              <p>Statikk Shiv</p>
              <span>Every 3rd attack deals 100 magical damage to 3 targets.</span>
            </ReactTooltip>
            <ReactTooltip id="swordbreaker" place="top" type="dark" effect="float">
              <p>Sword Breaker</p>
              <span>Attacks have a 25% chance to disarm for 3 seconds.</span>
            </ReactTooltip>
            <ReactTooltip id="seraphsembrace" place="top" type="dark" effect="float">
              <p>Seraph's Embrace</p>
              <span>Regain 20 mana each time a spell is cast.</span>
            </ReactTooltip>
            <ReactTooltip id="spearofshojin" place="top" type="dark" effect="float">
              <p>Spear of Shojin</p>
              <span>After casting, wearer gains 15% of its max mana per attack.</span>
            </ReactTooltip>
            <ReactTooltip id="berserkeraxe" place="top" type="dark" effect="float">
              <p>Berserker's Axe</p>
              <span>Wearer is also a Berserker.</span>
            </ReactTooltip>
            <ReactTooltip id="bloodthirster" place="top" type="dark" effect="float">
              <p>Bloodthirster</p>
              <span>Attacks heal for 40% of damage.</span>
            </ReactTooltip>
            <ReactTooltip id="deathblade" place="top" type="dark" effect="float">
              <p>Deathblade</p>
              <span>On a kill or assist, gain an additional 15 Attack Damage until end of combat (Stacks infinitely).</span>
            </ReactTooltip>
            <ReactTooltip id="dragonsclaw" place="top" type="dark" effect="float">
              <p>Dragon's Claw</p>
              <span>Gain 50% resistance to magic damage.</span>
            </ReactTooltip>
            <ReactTooltip id="bladeoftheruinedking" place="top" type="dark" effect="float">
              <p>Blade of the Ruined King</p>
              <span>Wearer is also a Blademaster.</span>
            </ReactTooltip>
            <ReactTooltip id="frozenmallet" place="top" type="dark" effect="float">
              <p>Frozen Mallet</p>
              <span>Wearer is also a Glacial.</span>
            </ReactTooltip>
            <ReactTooltip id="frozenmallet" place="top" type="dark" effect="float">
              <p>Frozen Heart</p>
              <span>Adjacent enemies lose 35% attack speed for 1 second.</span>
            </ReactTooltip>
            <ReactTooltip id="forceofnature" place="top" type="dark" effect="float">
              <p>Force of Nature</p>
              <span>Gain +1 team size.</span>
            </ReactTooltip>
          </p>
        </header>
        <body>
          <div id='elements'>
            <img src={elements} alt='elements'/>
          </div>
        </body>
      </div>
    );

  }
}

export default App;
