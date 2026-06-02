const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f5",
    },

    card: {
        width: "100%",
        maxWidth: "400px",
        padding: "2rem",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },

    title: {
        textAlign: "center" as const,
        marginBottom: "1.5rem",
        fontSize: "2rem",
        fontWeight: 600,
    },

    form: {
        display: "flex",
        flexDirection: "column" as const,
        gap: "1rem",
    },

    input: {
        padding: "0.75rem 1rem",
        border: "1px solid #d4d4d8",
        borderRadius: "8px",
        fontSize: "1rem",
        outline: "none",
    },

    button: {
        padding: "0.75rem",
        border: "none",
        borderRadius: "8px",
        backgroundColor: "#2563eb",
        color: "#ffffff",
        fontSize: "1rem",
        fontWeight: 600,
        cursor: "pointer",
    },
};

export default styles;