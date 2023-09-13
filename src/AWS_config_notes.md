# Notes

where-to-read-access:

```
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "VisualEditor0",
			"Effect": "Allow",
			"Action": [
				"dynamodb:BatchGetItem",
				"dynamodb:ConditionCheckItem",
				"dynamodb:GetItem",
				"dynamodb:Scan",
				"dynamodb:Query"
			],
			"Resource": "arn:aws:dynamodb:us-east-1:460769634229:table/WhereTo"
		}
	]
}
```
