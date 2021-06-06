import {IProfile} from '../interface/profile';

export class Profilevo{
    constructor(private iProfile:IProfile){}

    buildProfileObj(formvalue) :IProfile {
        this.iProfile.userName = formvalue.get('userName');
        this.iProfile.password = formvalue.get('password');
        this.iProfile.displayName = formvalue.get('displayName');
        this.iProfile.dob = formvalue.get('dob');
        this.iProfile.address = formvalue.get('address');
        return this.iProfile;
    }
    
}
