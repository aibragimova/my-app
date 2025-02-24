export function LoginInfo({ isLogin }) {
    return (
        <div>
            <p>{isLogin ? "Logged In" : "Logged Out"}</p>
        </div>
    );

}