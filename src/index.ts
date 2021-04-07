import * as Discord from 'discord.js'
import fs from 'fs'
import VCGB from 'types/types';
import * as games from './games'; 

const client:Discord.Client = new Discord.Client();


client.once('ready',()=>{
    console.log('online');
})



client.login(VCGB.config.token);