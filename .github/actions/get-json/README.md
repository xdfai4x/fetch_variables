# Get JSON from URL Action

This action fetches JSON data from a specified URL and sets the keys and values as GitHub variables.

## Inputs

- `url`: The URL to fetch the JSON from (required).

## Outputs

- `json-keys`: The keys from the fetched JSON.
- `json-values`: The values from the fetched JSON.

## Example Usage

```yaml
uses: ./.github/actions/get-json
with:
  url: 'https://api.example.com/data'