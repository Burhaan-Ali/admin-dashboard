
$(window).on('load', function () {
    $('#preloader').fadeOut('slow');
});

$(document).ready(function () {
    $('#profile-btn').on('click', function (e) {
        e.stopPropagation(); // Prevent closing when clicking the button
        $('#profile-menu').toggle(); // Show/hide the dropdown
    });

    // Hide menu when clicking outside
    $(document).on('click', function () {
        $('#profile-menu').hide();
    });
});

$(document).ready(function () {
    $(".submenu-toggle").click(function () {
        $(this).next(".submenu").slideToggle(200);
    });
    $(".submenu-toggle").click(function () {
        $(this).find(".bi").toggleClass("bi-chevron-right bi-chevron-down");
    });
});

  $(document).ready(function () {
    $('.tab-btn').click(function () {
      const tabId = $(this).data('tab');

      // Switch tab styles
      $('.tab-btn').removeClass('bg-blue-600 text-white').addClass('bg-gray-100 text-blue-600');
      $(this).removeClass('bg-gray-100 text-blue-600').addClass('bg-blue-600 text-white');

      // Show selected tab
      $('.tab-content').hide();
      $('#' + tabId).show();
    });
  });

$('#copyBtn').click(function () {
    // Get the text content inside the <pre>
    const code = $('#realcode').text().trim();

    // Create temporary textarea to copy from
    const tempInput = $('<textarea>');
    $('body').append(tempInput);
    tempInput.val(code).select();
    document.execCommand('copy');
    tempInput.remove();

    // Optional: show alert or change button text
    $(this).text('Copied!');
  });

  
