import sys
import yaml

# Usage: python generate_operation_ids.py input.yaml output.yaml

def snake_case(s):
    return s.replace('-', '_').replace('/', '_').strip('_')

def main():
    if len(sys.argv) != 3:
        print("Usage: python generate_operation_ids.py input.yaml output.yaml")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    with open(input_file, 'r') as f:
        spec = yaml.safe_load(f)

    for path, methods in spec.get('paths', {}).items():
        for method, details in methods.items():
            details['tags'] = [snake_case(path)]
            details['operationId'] = f"dag.web.controllers.{snake_case(path)}_controller.{method}"

    with open(output_file, 'w') as f:
        yaml.dump(spec, f, sort_keys=False)

if __name__ == "__main__":
    main()
