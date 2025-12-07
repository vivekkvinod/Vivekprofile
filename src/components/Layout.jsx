

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-cyber-dark text-cyber-text overflow-x-hidden selection:bg-cyber-accent/30 selection:text-white">
            {children}
        </div>
    );
};

export default Layout;
