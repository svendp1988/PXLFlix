export default function selectionMap({ series, map }) {
    return {
        series: [
            {
                title: 'Documentaries',
                data: series.filter((item) => item.genre === 'documentaries')
            },
        ]
    }
}