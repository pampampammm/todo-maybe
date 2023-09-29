interface LineProps {
    color?: string
}

export const ColoredLine = ({ color = 'gray' }: LineProps) => (
    <hr
        style={{
            color,
            backgroundColor: color,
            height: 1,
            borderRadius: 10,
            opacity: 0.2,
            marginBottom: 10,
        }}
    />
);
