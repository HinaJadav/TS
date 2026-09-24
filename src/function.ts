// param + return 
// both data type needs to mention in ts
type user = {
    name: string,
    mono: number
}

type profileInfo = {
    name: string,
    mono: number,
    userIsVerified: boolean,
    equity: number
}

// optional param ex: isVerify
// keep optional param in last 

// default param : ex equity

// object param : ex user
function profileInfo(user:user, islogin: boolean, equity = 1.00, isVerify?: boolean): profileInfo | null{
    
    let userInfo: {
        name: string;
        mono: number;
        userIsVerified: boolean;
        equity: number;
    } = {
        name: user.name,
        mono: user.mono,
        userIsVerified: isVerify ? true : false,
        equity: equity
    };
    return islogin ?  userInfo : null ;
}

let user1 : user = {
    name: "navneet",
    mono: 1231231233
}

let user1ProfileInfo = profileInfo(user1, true);
console.log(user1ProfileInfo);

let user1ProfileInfo1 = profileInfo(user1, true, 2.00); 
console.log(user1ProfileInfo1);

let user1ProfileInfo2 = profileInfo(user1, true, 1.00, true); // when want to pass optional param but not want to chage edfault value then we need to pass here value in place of default value same as it's default value 
console.log(user1ProfileInfo2);

let user1ProfileInfo3 = profileInfo(user1, true, 2.00, true);
console.log(user1ProfileInfo3);

// callback fn
type onSubmit = (isvalid: boolean) => void;

function saveUser(user:user, onSubmit:onSubmit) {
    onSubmit(Object.keys(user).length > 0);
}

// async fn
async function getnormalInfo(user1:user): Promise<number> {
    return 500;
}

// callback call
saveUser(user1, (isValid) => {
    console.log("Callback result:", isValid);
});

// async call
getnormalInfo(user1).then((result) => {
    console.log("Async result:", result);
});

// bad behaviour when data type is object 
function f2(obj : {
    param1: string,
    param2: number
}): void {
    console.log(obj.param1, obj.param2);
}

const obj1 = f2({
    param1: "hello",
    param2: 42
});

const f2obj = {param1: "world", param2: 24, param: "extra"};
// here we pass extra property into obj-param still not getting any error --> BAD BEHAVIOUR
console.log(f2(f2obj)); 