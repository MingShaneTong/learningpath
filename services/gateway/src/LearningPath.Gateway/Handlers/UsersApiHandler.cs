using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace LearningPath.Gateway.Handlers
{
	public interface IUsersApiHandler
	{
		public Task<IActionResult> UsersGet(int? limit, bool? active);
	}

	public class UsersApiHandler : IUsersApiHandler
	{
		public Task<IActionResult> UsersGet(int? limit, bool? active)
		{
			return null;
		}
	}
}
