
def dag_get(dagid):
    return {
        "elements": [
            { "data": { "id": "start", "label": "Start" } },
            { "data": { "id": "a", "label": "Step A" } },
            { "data": { "id": "b", "label": "Step B" } },
            { "data": { "id": "c", "label": "Step C" } },
            { "data": { "id": "d", "label": "Step D" } },
            { "data": { "id": "end", "label": "End" } },
            { "data": { "source": "start", "target": "a" } },
            { "data": { "source": "start", "target": "b" } },
            { "data": { "source": "a", "target": "c" } },
            { "data": { "source": "b", "target": "c" } },
            { "data": { "source": "c", "target": "d" } },
            { "data": { "source": "d", "target": "end" } }
        ]
    }
