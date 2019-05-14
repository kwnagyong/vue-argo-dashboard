export class  MyselfResponse {

    constructor(payload) {
        this.employeeId = payload.employeeId;
        this.companyId = payload.companyId;
        this.companyName = payload.companyName;
        this.departmentId = payload.departmentId;
        this.departmentName  = payload.departmentName;
        this.email = payload.email;
        this.createdAt = payload.createdAt;
    }

}
