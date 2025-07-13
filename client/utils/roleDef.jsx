const RoleDef = (role) => {
    const objRoles = {
        100: "teacher",
        150: "admin"
    }
    return objRoles[role]
}


export default RoleDef;