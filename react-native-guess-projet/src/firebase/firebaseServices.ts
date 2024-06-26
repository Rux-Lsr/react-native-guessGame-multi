import { firebase } from "@react-native-firebase/firestore";

interface PionPosition {
    x: number;
    y: number;
  } 
export const partyRef = firebase.firestore().collection('party');

export const setPionPosition = (positions:PionPosition[], player:string, hostName:string) => {
    if (player == hostName) {
            partyRef.where('host','==', hostName)
            .get()
            .then((snapshoot)=>{
                const parties = snapshoot.docs
                let index;
                for (index = 0; index < parties.length; index++) {
                    if(parties[index].data().status == 1)
                        break; 
                }

                parties[index].ref.update({
                    pions_positions1: positions
                })
            })
        }else{
            partyRef.where('host','==', hostName)
            .get()
            .then((snapshoot)=>{
                const parties = snapshoot.docs
                let index;
                for (index = 0; index < parties.length; index++) {
                    if(parties[index].data().status == 1)
                        break; 
                }

                parties[index].ref.update({
                    pions_positions2: positions
                })
            })
        }
}

export const setCroixPosition = (positions:PionPosition[], player: 0|1, hostName:string) => {
    switch (player) {
        case 0:
            partyRef.where('host','==', hostName)
            .get()
            .then((snapshoot)=>{
                const parties = snapshoot.docs
                let index;
                for (index = 0; index < parties.length; index++) {
                    if(parties[index].data().status == 1)
                        break; 
                }

                parties[index].ref.update({
                    croixPosition1: positions
                })
            })
            break;
        case 1:
            partyRef.where('host','==', hostName)
            .get()
            .then((snapshoot)=>{
                const parties = snapshoot.docs
                let index;
                for (index = 0; index < parties.length; index++) {
                    if(parties[index].data().status == 1)
                        break; 
                }

                parties[index].ref.update({
                    croixPosition2: positions
                })
            })
        default:
            break;
    }

}
