const UserList = ({ users }) => {
    console.log(users)
    return (<div>
        <table >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody data-testid="users">
                {users.length > 0 ? users?.map((user, index, array) => {
                    console.log(user)
                    return (
                        <tr key={user.email}>
                            <td>{user?.name || "-j"}</td>
                            <td>{user?.email || "-"}</td>
                        </tr>
                    )
                }) :
                    <tr>
                        <td colSpan={2}>No data</td>
                    </tr>

                }
            </tbody>
        </table>

    </div>);
}

export default UserList;