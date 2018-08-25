import { Injectable } from '@angular/core';


@Injectable()
export class config {
    public MainURL_Key: "MainURl";
    public Username_Key: "Username";
    public Password_Key: "Password";
    public UUID_Key: "UUDI";
    public CurrentEmpID: "";

    //Settings: Array<string> = [this.MainURL_Key, this.Username_Key, this.Password_Key];

    constructor() {
        // this.Settings.forEach(element => {
        //     this.file.checkFile(this.file.dataDirectory, element).then(_ => this.file.createFile(this.file.dataDirectory, element, true));
        // });
        this.MainURL_Key = "MainURl";
        this.Username_Key = "Username";
        this.Password_Key = "Password";
        this.UUID_Key = "UUDI";
        this.CurrentEmpID = "";

    }

    // GetSetting(SettingKey: string) {
    //     return this.file.readAsText(this.file.dataDirectory, SettingKey);
    // }

    // SetSetting(SettingKey: string,Value:string) {
    //     return this.file.writeFile(this.file.dataDirectory,SettingKey, Value);
    // }


}