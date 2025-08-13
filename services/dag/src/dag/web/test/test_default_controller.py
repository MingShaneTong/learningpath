import unittest

from flask import json

from src.test import BaseTestCase


class TestDefaultController(BaseTestCase):
    """DefaultController integration test stubs"""

    def test_test_get(self):
        """Test case for test_get

        
        """
        headers = { 
        }
        response = self.client.open(
            '/v1/test',
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
