import { Collection, GuildMember } from "discord.js";

namespace VCGB{
    export namespace games{
       export class baseClass{
           constructor(users:Collection<number,GuildMember>){

           }
        }
        
        export type gameClass = baseClass;

        export interface gameInterface{
            instance:baseClass,
        }
    }
    export const config = {
        token:'',
        name:'VC Games Bot'
    }
}

export default VCGB;